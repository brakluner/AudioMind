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
                    {/* <Cell col={12}>
                        <div className="card-content" >
                            <CardActions border>
                                <NavLink className="nav-link nav-color" activeClassName="active" to="/home">Home</NavLink>
                            </CardActions>
                            <CardActions border>
                                <Button colored>View Updates</Button>
                            </CardActions>
                            <CardActions border>
                                <Button colored>View Updates</Button>
                            </CardActions>
                        </div>
                    </Cell> */}
                    <Cell col={12}>
                        <div className="favorites-content">
                            <h1>Uploads</h1>
                            {/* <form action="/upload" method="POST" enctype="multipart/form-data">
                                <div className="custom-file">
                                    <input type="file" name="file" id="file" className="custom-file-input"/>
                                    <label for="file" className="custom-file-label btn grey">Choose File</label>                                
                                </div>
                                <input type="submit" value="Submit" className="btn grey"></input>
                            </form> */}


                            <form action="/upload" method="POST" enctype="multipart/form-data" style = {{width: "500px"}}>
    <div className="file-field input-field" >
      <div  className="btn" style = {{backgroundColor: "#b3d4fc", color: "#334F7A"}}>
        <span style = {{fontFamily: "Verdana, sans-serif", fontSize: "18px", textTransform: "none"}}>Upload</span>
        <input type="file" name="file" id="file" className="custom-file-input"/>
      </div>
      
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
        
      </div>
      
    </div>
    <div style = {{textAlign: "center"}}>
    <input type="submit" value = "Add to Uploads" className="btn-large waves-effect" style = {{backgroundColor: "#90EE90", marginBottom: "20px", fontFamily: "Verdana, sans-serif", fontSize: "18px", textTransform: "none"}}>  
</input>
</div>
    
{/* <a type="submit" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a> */}
  </form>


                            <div className="list-content" style = {{width: "600px"}}>
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