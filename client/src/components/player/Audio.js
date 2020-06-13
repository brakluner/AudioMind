import React, { useState, useEffect } from "react";
import areYouSure from './areYouSure/surePrompt';
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
    const deleteButton = (id) => {
        const call = () => areYouSure(id);
        return <button onClick={call} style = {{color: "tomato", border: "white", fontSize: "28px", cursor: "pointer"}}><i class="material-icons">delete_forever</i></button>;
      }
    var path = window.location.pathname

    if (path === '/') {

        return (
            <div className="row">


                <ul className = "collection">
                
                {files.map((file) => file.isAudio ? <div><li className="collection-item avatar"><form method="POST" action={`/files/${file.filename}?_method=PUT`}>
                        <button className="circle" style = {{backgroundColor: "PaleGoldenRod", cursor: "pointer"}}>
                        <i className="material-icons">grade</i>
          </button>
                    </form><label>{file.filename}</label><br></br><audio controls>
                    <source src={`audio/${file.filename}`} />
                </audio>
                    <form className = "secondary-content" style = {{float: "right"}}>
                        {deleteButton(file._id)}
                    </form>
                    
                    </li>
                    <script>
                        {document.addEventListener('play', function (e) {
                            var audios = document.getElementsByTagName('audio');
                            for (var i = 0, len = audios.length; i < len; i++) {
                                if (audios[i] !== e.target) {
                                    audios[i].pause();
                                }
                            }
                        }, true)
                        };
</script>
                </div> : null
                )}

</ul>
            </div>
        );
    } else {
        return (
            //const notPurchased = props.groceries.filter(grocery => !grocery.purchased);
            <div className="row">
                {files.map((file) => file.isFavorite == "true" ? <div><label>{file.filename}</label><br></br><audio controls>
                    <source src={`audio/${file.filename}`} />
                </audio>
                    <form method='POST' action={`/tagfiles/${file.filename}?_method=PUT`}>
                        <button>Remove From Favorites</button>
                    </form>
                    <script>
                        {document.addEventListener('play', function (e) {
                            var audios = document.getElementsByTagName('audio');
                            for (var i = 0, len = audios.length; i < len; i++) {
                                if (audios[i] !== e.target) {
                                    audios[i].pause();
                                }
                            }
                        }, true)
                        };
</script>
                </div> : null
                )}
            </div>
        );
    }
}
export default Audio;