import React from 'react';
import LandingPage from './landingpage'
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    
        <Switch>
            <Route exact path = '/' component={LandingPage} />
        </Switch>
    )

export default Main;