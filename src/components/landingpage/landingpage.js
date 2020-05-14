import React, { Component } from 'react';
import { Grid, Cell,  CardActions, Button,  } from 'react-mdl';
// import TopCharts from './topcharts/TopCharts';

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                         <div className="card-content" > 

                                <CardActions border>
                                    <Button to= "/home"colored>View App</Button>
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
                            <h1>Top Charts</h1>
                            <div className="list-content">
                                <ul>
                                    <li>ddraerar</li>
                                    <li>faerafr</li>
                                    <li>fdafadf</li>
                                    <li>fadf</li>
                                    <li>fdfdafdaf</li>

                                </ul>
                                {/* <TopCharts/> */}
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;