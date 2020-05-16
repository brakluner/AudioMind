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


    return (
        <div className="row">
            {files.name}
        </div>
    );
}
export default Audio;