import React from 'react';
import HeaderBar from "./components/header/HeaderBar";
import Index from "./components/index/Index";
import FooterBar from "./components/footer/FooterBar";

function HomePage() {
    return (
        <div>
            <HeaderBar />
            <Index />
            <FooterBar />

        </div>
    );
}

export default HomePage;