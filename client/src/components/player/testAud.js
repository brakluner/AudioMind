// import React, { useState, useEffect } from "react";
// import areYouSure from "./areYouSure/surePrompt";
// import API from "../../utils/api";

// console.log(API);

// function Audio() {
//   const [files, setFiles] = useState([]);

//   useEffect(() => {
//     loadFiles();
//   }, []);

//   function loadFiles() {
//     API.getFiles()
//       .then((res) => setFiles(res.data))
//       .catch((err) => console.log(err));
//   }
//   console.log(files);
//   var path = window.location.pathname;

//   if (path === "/") {
//     return (
//       <ul className="row collection">
//         {files.map((file) =>
//           file.isAudio ? (
//             <li class="collection-item avatar">
//               <label>{file.filename}</label>

//               <br></br>
//               <audio controls>
//                 <source src={`audio/${file.filename}`} />
//               </audio>
//               <form
//                 method="POST"
//                 onClick={areYouSure}
//                 action={`/files/${file._id}?_method=DELETE`}
//               >
//                 <button>Delete</button>
//               </form>
//               <form
//                 method="POST"
//                 action={`/files/${file.filename}?_method=PUT`}
//               >
//                 <button className="btn btn-primary btn-sm">Add Favorite</button>
//                 <a
//                   href={`/files/${file.filename}?_method=PUT`}
//                   class="secondary-content"
//                 >
//                   <i class="material-icons">grade</i>
//                 </a>
//               </form>

//               <script>
//                 {document.addEventListener(
//                   "play",
//                   function (e) {
//                     var audios = document.getElementsByTagName("audio");
//                     for (var i = 0, len = audios.length; i < len; i++) {
//                       if (audios[i] !== e.target) {
//                         audios[i].pause();
//                       }
//                     }
//                   },
//                   true
//                 )}
//                 ;
//               </script>
//             </li>
//           ) : null
//         )}
//       </ul>
//     );
//   } else {
//     return (
//       //const notPurchased = props.groceries.filter(grocery => !grocery.purchased);
//       <div className="row">
//         {files
//           .filter((file) => file.isFavorite == "true")
//           .map((file) =>
//             file ? (
//               <div>
//                 <label>{file.filename}</label>
//                 <br></br>
//                 <audio controls>
//                   <source src={`audio/${file.filename}`} />
//                 </audio>
//                 <form
//                   method="POST"
//                   onClick={areYouSure}
//                   action={`/tagfiles/${file.filename}?_method=PUT`}
//                 >
//                   <button>Remove From Favorites</button>
//                 </form>
//                 <script>
//                   {document.addEventListener(
//                     "play",
//                     function (e) {
//                       var audios = document.getElementsByTagName("audio");
//                       for (var i = 0, len = audios.length; i < len; i++) {
//                         if (audios[i] !== e.target) {
//                           audios[i].pause();
//                         }
//                       }
//                     },
//                     true
//                   )}
//                   ;
//                 </script>
//               </div>
//             ) : null
//           )}
//       </div>
//     );
//   }
// }
// export default Audio;