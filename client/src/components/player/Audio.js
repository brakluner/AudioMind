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
var path = window.location.pathname

if (path === '/'){

    return (
        <div className="row">
            {files.map((file) => file.isAudio ? <div><label>{file.filename}</label><br></br><audio controls>
                <source src={`audio/${file.filename}`} />
            </audio>
            <form method='POST' action={`/files/${file._id}?_method=DELETE`}>
                    <button>Delete</button>
                </form>
            <form method="POST" action={`/files/${file.filename}?_method=PUT`}>
            <button className="btn btn-primary btn-sm">
            Add Favorite
          </button>
            </form>
                <script>
        {document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] !== e.target){
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
} else {
    return (
        //const notPurchased = props.groceries.filter(grocery => !grocery.purchased);
        <div className="row">
            {files.map((file) => file.isFavorite ? <div><label>{file._id}</label><br></br><audio controls>
                <source src={`audio/${file._id}`} />
            </audio>
            <form method='POST' action={`/files/${file._id}?_method=DELETE`}>
                    <button>Delete</button>
                </form>
            <form method="POST" action={`/files/${file.filename}?_method=PUT`}>
            <button className="btn btn-primary btn-sm">
            Remove Favorite
          </button>
            </form>
                <script>
        {document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] !== e.target){
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