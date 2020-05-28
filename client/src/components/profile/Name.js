import React from "react";


function Name() {
  return (
<div class="row">
      <form class="col s12">
          <div class = "row">
              <h3>Change Name</h3>
          </div>
        <div class="row">
          <div class="input-field col s6">
            <input id="input_text" type="text" data-length="10"/>
            <label for="input_text">Input text</label>
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

export default Name;