import React from 'react';
import { Link} from "react-router-dom";

import logo from './logo.PNG';
import './style.css';
import 'materialize-css/dist/css/materialize.min.css';
//import M from 'materialize-css';
import M from  'materialize-css/dist/js/materialize.min.js';
const open = 'translateX(0%)';
const close = 'translateX(-105%%)';



export default class NavBar extends React.Component {
  componentDidMount() {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }

  
  // constructor(props){
  //   super(props);
  //   this.state = { color: close };
  //   this.changeColor = this.changeColor.bind(this);
  //   this.closeColor = this.closeColor.bind(this);
  // }
  // changeColor(){
  //   const newColor = this.state.color == close ? open : close;
  //   this.setState({ color: newColor })
  // }
  // closeColor() {
  //   const oldColor = this.state.color == close ? open: close;
  //   this.setState({ color: oldColor})
  // }

  render() {
    
  return (
    <div>
    <div className = "desktopShow">
    <nav className="nav-extended color">
    <div className="nav-wrapper">
    <img className = "activator" src={logo} alt = "logo" width = "200px"/> 
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/profile">Profile</Link></li>
        
        <li><Link to="/signin">Sign out</Link></li>
      </ul>
      
    </div>
    <div className="nav-content">
      <ul className="tabs tabs-transparent" style = {{fontFamily: "Verdana, sans-serif"}}>
        <li className="tab"><Link to="/">My Uploads</Link></li>
        <li className="tab"><Link to="/browse">Browse</Link></li>
        <li className="tab"><Link to="/favorites">Favorites</Link></li>

        <li className="tab"><Link to="/connect">Connect</Link></li>
      </ul>
    </div>
    
  </nav>

  <ul className="sidenav" id="mobile-demo">
  <li><Link to="/profile">Profile</Link></li>
        
        
  </ul>
  </div>

  <div className = "mobileShow">
  <nav>
...
<a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
<ul> ... </ul>
</nav>
<ul id="slide-out" className="sidenav">
 <li><a href="#item1">Item 1</a></li>
 <li><a href="#item2">Item 2</a></li>
 <li><a href="#item3">Item 3</a></li>
</ul>
  </div>

  <style>
                  {`
                   .desktopShow {
                     display: none;
                   }


                  
                   .mobileShow {
                       display: none;
                   }
                  
                  @media screen and (min-width: 992px) {
                      .desktopShow {
                        display: inline
                      }
                  }

                  @media screen and (max-width: 992px) {
                      .mobileShow {
                          display: inline;
                      }
                  }`}  
                </style>
                
                
  </div>
 
  );
}}