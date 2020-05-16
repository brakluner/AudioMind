import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Nav from './Nav'

// import TopCharts from './topcharts/TopCharts';
class LandingPage extends Component {

    
    render() {
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>xs=12</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                    <Grid item xs={6}>e={classes.paper}>xs=6</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                </Grid>
            </div>
// dkhfdkfhalkdfhdsaf
        )
    }
}

export default LandingPage;




{/* <div className="favorites-content">
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
                        //     </div>
                        // </div> */}


// Link to="/home">
//                                             <button type="button">
//                                                 Sign-UP
//                                             </button>
//                                     </Link>