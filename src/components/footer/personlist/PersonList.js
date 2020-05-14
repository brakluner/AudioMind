import React from "react";


function PersonList = ({ listArry }) => {
    var personsList = [];
    if (listArry) {
        personsList = listArry.map(persons => {
            return (
                <li>{persons.name}</li>
            );
        });
        return (
            <ul>{personsList}</ul>
        );
    } else {
        return (
            <ul>empty</ul>
        );
    };
};

export default PersonList;