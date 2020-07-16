import React from 'react';
import { Grid, Cell } from 'react-mdl';
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
    <input type="submit" value = "Add to Uploads" className="btn-large waves-effect" style = {{backgroundColor: "#90EE90", fontFamily: "Verdana, sans-serif", fontSize: "18px", textTransform: "none"}}>  
</input>
</div>
    
{/* <a type="submit" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a> */}
  </form>
  </div>
  </Cell>
</Grid>



  <Grid className="landing-grid-1">                 
         <Cell col={6}> 
                            <div className="list-content">
                                <h3 style = {{fontFamily: "Brush Script MT, Brush Script Std, cursive", textAlign: "center"}}>Audio files</h3>
                               <Audio />
                              
                            </div>
                            </Cell>
                            <Cell col={6}>
                            <div>
                            <h3 style = {{fontFamily: "Brush Script MT, Brush Script Std, cursive", textAlign: "center"}}>Video files</h3>
                            
                            <Video />

                            </div>
                            

                        
                    </Cell>
                </Grid>
            </div>
        )
    
}
export default LandingPage;