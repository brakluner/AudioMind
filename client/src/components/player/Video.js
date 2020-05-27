import React, { useState, useEffect } from "react";
import areYouSure from './areYouSure/surePrompt';
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
    var path = window.location.pathname

    if (path === '/') {

        return (
            <div className="row video">
                {files.map((file) => file.isVideo ? <div><label>{file.filename}</label><br></br><video width="500" controls>
                    <source src={`video/${file.filename}`} />
                </video>
                    <form method='post' onClick={areYouSure} action={`/files/${file._id}>)}?_method=DELETE`}>
                        <button>Delete</button>
                    </form>
                    <form method="POST" action={`/videofiles/${file.filename}?_method=PUT`}>
                        <button className="btn btn-primary btn-sm">
                            Add Favorite
          </button>
                    </form>
                </div> : null
                )}
            </div>
        );
    } else {
        return (
            <div className="row video">
                {files.filter((file) => file.isFavoriteVideo == "true").map((file) => file ? <div><label>{file._id}</label><br></br><video width="500" controls>
                    <source src={`video/${file.filename}`} />
                </video>
                    <form method='post' onClick={areYouSure} action={`/tagfiles/${file.filename}?_method=PUT`}>
                        <button>Remove Favorite</button>
                    </form>
                </div> : null
                )}
            </div>
        )
    }
}
export default Video;