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
      
                        

                            <Cell col={6}>
           
                            <h3 style = {{fontFamily: "Brush Script MT, Brush Script Std, cursive", textAlign: "center"}}>Audio playlist</h3>
                               <Audio />
                               
                               
                               </Cell>

                               <Cell col= {6}>

                               <h3 style = {{fontFamily: "Brush Script MT, Brush Script Std, cursive", textAlign: "center"}}>Video playlist</h3>
                               <Video />

                               </Cell>
                               
                               



                    
                </Grid>
               
            </div>
        )
    
}
export default LandingPage;