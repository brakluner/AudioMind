import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import ProfilePage from "./HomePage";
import LandingPage from './components/landingpage/LandingPage';
import NavBar from './components/nav/Nav';
import Footer from './components/footerMusic/Footer';
import ProfilePage from './components/profile/Profile';
import FavoritesPage from './components/FavoritesPage/FavoritesPage'
import Connect from './components/connect/Connect';
import Browse from './components/browse/Browse';

import Favorites from './components/favorites/Favorites';
import Signin from './components/login/signin';


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
          <Route path="/"><LandingPage /></Route>
=======
          <Route path='/favorites' component={FavoritesPage}/>
          
<<<<<<< HEAD
          <Route path="/favorites" component={Favorites} exact />
          <Route path="/signin" component={Signin} exact />
=======
>>>>>>> deacf9316876062763b3fd62e7bcbb135ab58423
          <Route path="/"><LandingPage/></Route>
>>>>>>> 68345a5f5519d381e40074be15a51b2ff6f799e7
          {/* <Route path="/profilepage"><Profile/></Route> */}
        </Switch>
      </div >
      <Footer></Footer>
    </Router>
  );
}

export default App;


