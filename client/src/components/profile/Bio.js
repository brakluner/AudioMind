import React from "react";


function Bio() {
  return (
<div class="row">
      <form class="col s12">
      <div class = "row">
              <h3>Change Bio</h3>
          </div>
        <div class="row">
          
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
            <label for="textarea2">Textarea</label>
          </div>
        </div>
        <div class = "row">
        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
  </button>
        </div>
      </form>
    </div>

    
   
  );
}

export default Bio;