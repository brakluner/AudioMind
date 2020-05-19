import React, { useState, useEffect} from "react";
import API from "../../utils/api"


console.log(API)

function Video() {
    const [files, setFiles] = useState([])

useEffect(() => {
    loadFiles()
}, [])

function loadFiles() {
    API.getFiles()
      .then(res =>
        setFiles(res.data)
        )
        .catch(err => console.log(err));
};
console.log(files)

    return (
        <div className="row video">
            {files.map((file) => file.isVideo ? <div><video width="500" controls>
                <source src={`video/${file.filename}`} />
            </video>
            <form method='post' action={`/files/${file._id}>)}?_method=DELETE`}>
                    <button>Delete</button>
                </form>
            </div> : null
            )}
        </div>
    );
}
export default Video;