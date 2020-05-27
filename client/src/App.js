<<<<<<< HEAD
import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
=======
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
>>>>>>> f43294178baf9e44b214b28b66950cc5a37a6bbb
//import ProfilePage from "./HomePage";
import LandingPage from "./components/landingpage/LandingPage";
import NavBar from "./components/nav/Nav";
import Footer from "./components/footerMusic/Footer";
import ProfilePage from "./components/profile/Profile";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";
import Connect from "./components/connect/Connect";
import Browse from "./components/browse/Browse";

import Signin from "./components/login/signin";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <div>
        <Switch>
          <Route path="/profile" component={ProfilePage} exact />
          <Route path="/connect" component={Connect} exact />
          <Route path="/browse" component={Browse} exact />
<<<<<<< HEAD
          <Route path="/favorites" component={FavoritesPage} />

          <Route path="/signin" component={Signin} exact />

          <Route path="/">
            <LandingPage />
          </Route>
=======

          <Route path="/"><LandingPage /></Route>

          <Route path='/favorites' component={FavoritesPage}/>
          <Route path="/signin" component={Signin} exact />
>>>>>>> f43294178baf9e44b214b28b66950cc5a37a6bbb
          {/* <Route path="/profilepage"><Profile/></Route> */}
        </Switch>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
