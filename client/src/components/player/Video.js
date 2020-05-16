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
        <div className="row">
            {files.map((file) => file.isVideo ? <video controls>
                <source src={`video/${file.filename}`} />
            </video> : null
            )}
        </div>
    );
}
export default Video;