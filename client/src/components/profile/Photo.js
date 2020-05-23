import React from "react";


function Photo() {
  return (
<form action="#">
<div class = "row">
              <h3>Change Photo</h3>
          </div>
    <div class="file-field input-field">
      <div class="btn">
        <span>File</span>
        <input type="file"/>
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text"/>
      </div>
    </div>
    <div class = "row">
        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
  </button>
        </div>
  </form>

    
   
  );
}

export default Photo;