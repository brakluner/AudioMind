import React, { Component } from 'react';
import { Grid, Cell, CardActions, Button, } from 'react-mdl';
import { NavLink } from 'react-router-dom';
import Audio from '../player/Audio';
import Video from '../player/Video';


// import TopCharts from './topcharts/TopCharts';
class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
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
                    </Cell>
                    <Cell col={12}>
                        <div className="favorites-content">
                            <h1>Uploads</h1>
                            <form action="/upload" method="POST" enctype="multipart/form-data">
                                <div className="custom-file">
                                    <input type="file" name="file" id="file" class="custom-file-input"/>
                                    <label for="file" className="custom-file-label">Choose File</label>                                
                                </div>
                                <input type="submit" value="Submit" className="btn"></input>
                            </form>
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
}
export default LandingPage;