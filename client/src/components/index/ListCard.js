import React from "react";
// const number = " ";

const Index = ({ cardSet }) => {
    let arryList = [];
    if (cardSet) {
        arryList = cardSet.map(listAssy => {


            return (<div className="header-bar row">
                <li>{listAssy.name}</li>
                <li>{listAssy.ranking}</li>
                <li>{listAssy.genre}</li>
            </div >);
        })
    };

    return (
        <div>
            <ul>{arryList}</ul>
        </div>
    );
}
export default Index;