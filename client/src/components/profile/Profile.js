import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import { Link} from "react-router-dom";
  import Name from "./Name";
  import Bio from "./Bio";
  import Photo from "./Photo";
  import Password from "./Password";
 
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
          <Route path="/bio">
            <Bio />
          </Route>
          <Route path="/photo">
            <Photo />
          </Route>
         
          <Route path="/password">
            <Password />
          </Route>
          
          
          
        </Switch>
        </div>
      </div>
     
    </Router>
        )
    
}
export default ProfilePage;