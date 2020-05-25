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



function App() {
  return (
    <Router>
    <NavBar></NavBar>
      <div>
        <Switch>
          <Route path="/profile" component={ProfilePage} exact />
          <Route path="/connect" component={Connect} exact />
          <Route path="/browse" component={Browse} exact />
          <Route path='/favorites' component={FavoritesPage}/>
          
          <Route path="/"><LandingPage/></Route>
          {/* <Route path="/profilepage"><Profile/></Route> */}
        </Switch>
      </div >
      <Footer></Footer>
    </Router>
  );
}

export default App;


