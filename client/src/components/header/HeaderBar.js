import React from "react";

import Iframe from "./Iframe";
import Grid from "@material-ui/core/Grid";

function HeaderBar() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <div className="logo">
          {/* <a to="_blank">
            <img src="./images/mylogo.jpg" alt = "test" style={{ width: 100 }}></img>
          </a> */}
        </div>
      </Grid>
      <Grid item xs={2}>
<<<<<<< HEAD
        {/* <p className="personal-name">Your Name</p> Usernames will be implemeneted later*/}
        <img className="avatar"></img>
=======
        <p className="personal-name">Your Name</p>
        <img className="avatar" alt = "test"></img>
>>>>>>> 4df33e8a8fe36d7195fdb0bc5c1a5d3507d77360
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
