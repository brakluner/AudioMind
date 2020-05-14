import React from 'react';
import HeaderBar from "./components/header/HeaderBar";
import Index from "./components/header/Index";
import FooterBar from "./components/header/FooterBar";



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