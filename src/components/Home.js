// Home.js

import React from 'react';
import CubeScene from './Cube';
import './Home.css';

import ParticleText from './ParticleText';

const Home = () => {
  return (
    <div className="container">
       <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <ParticleText />
      </div>
    </div>

  );
};

export default Home;