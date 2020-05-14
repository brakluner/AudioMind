import React from "react";
const number = "";

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
                    <p>number of uploads: {number}</p>
                </div>
            </div>
        </div>
    )
}

export default HeaderBar;