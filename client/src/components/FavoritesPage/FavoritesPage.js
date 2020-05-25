import React, { Component } from 'react';
import { Grid, Cell, CardActions, Button, } from 'react-mdl';
import { NavLink } from 'react-router-dom';
import Audio from '../player/Audio';
import Video from '../player/Video';


// import TopCharts from './topcharts/TopCharts';
function LandingPage() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                <Cell col={12}>
                        <div className="favorites-content">
                            <h1>favorites</h1>
                            <div className="list-content">
                               <Audio />
                               <Video />
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    
}
export default LandingPage;