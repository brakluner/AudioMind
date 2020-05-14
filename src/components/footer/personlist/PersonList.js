import React from "react";


const PersonList = ({ listArry }) => {
    var personsList = [];
    if (listArry) {
        personsList = listArry.map(persons => {

            return (
                <li>{persons.name}</li>
            );

        });

    } else {
        return (
            <ul>empty</ul>
        );
    }
    return (
        <ul>{personsList}</ul>
    );
};

export default PersonList;