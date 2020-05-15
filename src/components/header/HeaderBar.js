import React from "react";

import Iframe from "./Iframe";
import Grid from "@material-ui/core/Grid";

function HeaderBar() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <div className="logo">
          <a to="/home">
            <img src="./images/mylogo.jpg" style={{ width: 100 }}></img>
          </a>
        </div>
      </Grid>
      <Grid item xs={2}>
        <p className="personal-name">Your Name</p>
        <img className="avatar"></img>
        <div>
          <p>number of uploads: </p>
        </div>
      </Grid>

      <Grid item xs={4}>
      </Grid>
      <Grid item xs={4}>
        <Iframe></Iframe>
      </Grid>

    </Grid>
  );
}

export default HeaderBar;
