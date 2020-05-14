import React from "react";
import ListCard from "./ListCard";
import favoritetest from "./favoritetest.json"

function Index() {

    return (
        <div className="row">
            <ListCard cardSet={favoritetest} />
            <ListCard />
            <ListCard />
        </div>
    );
}
export default Index;