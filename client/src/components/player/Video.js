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
    const deleteButton = (id) => {
        const call = () => areYouSure(id);
        return <button onClick={call} className = "btn btn-primary btn-sm" style = {{textTransform: "none", fontFamily: "Verdana, sans-serif", backgroundColor: "tomato", cursor: "pointer", width: "100%"}} >Delete Video</button>;
      }
    var path = window.location.pathname

    if (path === '/') {

        return (
            <div className="row video">

                <div className = "col s12">





                <ul className = "collection">
                {files.map((file) => file.isVideo ? <div><li className="collection-item">
                    

                   
                    
                    
                    
                    
                    <br></br>
                
                
                
                <div className = "row">
                <div className = "col s2">

                </div>
                

                <div className = "col s8">
                <label>{file.filename}</label>

                <video width="100%" controls>
                    <source src={`video/${file.filename}`} />
                </video>

                </div>
                <div className = "col s2">
                    
                    </div>


                </div>


                   <div className = "row">
                   <div className = "col s2"></div>
            <div className = "col s4">

                    <form method="POST" action={`/videofiles/${file.filename}?_method=PUT`} >
                        <button className="btn btn-primary btn-sm" style = {{textTransform: "none", fontFamily: "Verdana, sans-serif", backgroundColor: "PaleGoldenRod", cursor: "pointer", width: "100%", color: "black"}}>
                            Add Favorite
          </button>
                    </form></div> 
                    
                    <div className = "col s4">
                        <form >
                    {deleteButton(file._id)}                    </form></div>
                    
                    <div className = "col s2"></div>
                    
                    </div></li>
                </div> : null
                )}
                </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div className="row video">
                {files.map((file) => file.isFavoriteVideo == "true" ? <div><label>{file.filename}</label><br></br><video width="500" controls>
                    <source src={`video/${file.filename}`} />
                </video>
                    <form method='post' action={`/tagfiles/${file.filename}?_method=PUT`}>
                        <button>Remove Favorite</button>
                    </form>
                </div> : null
                )}
            </div>
        )
    }
}
export default Video;