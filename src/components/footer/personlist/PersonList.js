import React from "react";


function PersonList = ({ listArry }) => {
    var personsList = [];
    if (listArry) {
        personsList = listArry.map(persons => {

            <li>{persons.name}</li>
    );
        return (
            <ul>{listItems}</ul>
        );
    } else {
        return (
            <ul>empty</ul>
        );
    }

};

export default PersonList;