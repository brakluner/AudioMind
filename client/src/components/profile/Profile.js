import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import { Link} from "react-router-dom";
  import Name from "./Name";
  import dog from './dog.jpg';


// import TopCharts from './topcharts/TopCharts';
function ProfilePage() {
   
        return (
            <Router>
      <div className= "row">
      <div className = "col s3">
      <div className="collection">
<Link to="/name" class = "collection-item">Edit Name</Link>
<Link to="/bio" class = "collection-item">Edit Bio</Link>
<Link to="/photo" class = "collection-item">Change Photo</Link>
<Link to="/password" class = "collection-item">Change Password</Link>



</div>
      
      </div>

    <div class="col s4">
      <div class="card">
        <div class="card-image">
        <img class = "activator" src={dog} alt = "dog"/> 
          
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
        <span class="card-title">Jimmy</span>
          <p>I am a rocking quitarist. Lets connect! I can make great sounds straight to your eardrums.</p>
        </div>
      </div>
    </div>
            
        

         
          <div className="col s5">

        <Switch>
          <Route path="/name">
            <Name />
          </Route>
          <Route path="/photo">
            <Name />
          </Route>
          <Route path="/bio">
            <Name />
          </Route>
          <Route path="/password">
            <Name />
          </Route>
          
          
          
        </Switch>
        </div>
      </div>
     
    </Router>
        )
    
}
export default ProfilePage;