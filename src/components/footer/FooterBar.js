import React from "react";
import PersonList from "./personlist/PersonList"
const contributors = [];
const following = [];

function FooterBar() {
    return (
        <div>
            {/* <a href="/home">Settings</a> */}
            <p>Settings</p>
            <p>Audio Mind 2020</p>
            <PersonList listArry={contributors} />
            <PersonList listArry={following} />
        </div>
    )
}

export default FooterBar;