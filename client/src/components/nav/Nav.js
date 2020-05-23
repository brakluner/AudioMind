import React from 'react';
import { Link} from "react-router-dom";




export default function NavBar() {
  

  return (
    <div>
    <nav class="nav-extended">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">My Studio</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Profile</a></li>
        <li><a href="badges.html">Settings</a></li>
        <li><a href="collapsible.html">Inspiration</a></li>
      </ul>
    </div>
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab"><Link to="/">My Uploads</Link></li>
        <li class="tab"><Link to="/home">Browse</Link></li>
        <li class="tab disabled"><Link to="/">Favorites</Link></li>
        <li class="tab"><Link to="/">Connect</Link></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">JavaScript</a></li>
  </ul>

 
  </div>
  );
}