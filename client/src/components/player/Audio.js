import React, { useState, useEffect} from "react";
import API from "../../utils/api"

console.log(API)

function Audio() {
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
        <div className="row">
            {files.map((file) => file.isAudio ? <div><audio controls>
                <source src={`audio/${file.filename}`} />
            </audio>
            <form method='post' action={`/files/${file._id}>)}?_method=DELETE`}>
                    <button>Delete</button>
                </form>
            </div> : null
            )}
        </div>
    );
}
export default Audio;