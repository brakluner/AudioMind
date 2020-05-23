import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from "./HomePage";
import LandingPage from './components/landingpage/LandingPage';
import NavBar from './components/nav/Nav';
function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
      <div>
        <Switch>
          <Route path="/home" component={HomePage} exact />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div >
    </BrowserRouter>
  );
}

export default App;


