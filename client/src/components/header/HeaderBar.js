import React from "react";

import Iframe from "./Iframe";

function HeaderBar() {
    return (
        <div className="header-bar row">
            <div className="logo">
                <a to="/home"><img src="./images/mylogo.jpg"></img></a>
            </div>
            <div className="personal-info col">
                <div className="row">
                    <img className="avatar"></img>
                    <p className="personal-name">Your Name</p>
                </div>
                <div>
                    <p>number of uploads: </p>
                </div>
            

            </div>
            <div>
                <Iframe></Iframe>

            </div>

        </div>
    )
}

export default HeaderBar;