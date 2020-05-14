import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './component/main';
import { Link } from 'react-router-dom';

function App() {
  return (

    <div style={{height: '300px', position: 'relative'}}>
        <Layout style={{background: 'url(https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1674610.jpg) center / cover'}}>
    
            <Header transparent title="AudioMind" style={{color: 'white'}}>
                <Navigation>
                    <Link to="/">Sign Up</Link>
                    <Link to="/">Log-In</Link>
                </Navigation>
            </Header>
    
            <Drawer title="AudioMind">
                <Navigation>
                    <Link to="/">Sign Up</Link>
                    <Link to="/">Log-In</Link>
                </Navigation>
            </Drawer>
    
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
      </div>

  );
}

export default App;


