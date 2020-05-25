import React from 'react';
import { Link} from "react-router-dom";

import logo from './logo.PNG';
import './style.css';

export default function NavBar() {
  

  return (
    
    <div>
    <nav class="nav-extended color">
    <div class="nav-wrapper">
    <img class = "activator" src={logo} alt = "logo" width = "200px"/> 
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to="/profile">Profile</Link></li>
        
        <li><Link to="/signin">Sign out</Link></li>
      </ul>
      
    </div>
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab"><Link to="/">My Uploads</Link></li>
        <li class="tab"><Link to="/browse">Browse</Link></li>
        <li class="tab"><Link to="/favorites">Favorites</Link></li>

        <li class="tab"><Link to="/connect">Connect</Link></li>
      </ul>
    </div>
    
  </nav>

  <ul class="sidenav" id="mobile-demo">
  <li><Link to="/profile">Profile</Link></li>
        
        
  </ul>

 
  </div>
 
  );
}