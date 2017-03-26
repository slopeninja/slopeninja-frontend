import React from 'react';
import ResortInfoCard from './ResortInfoCard/ResortInfoCard';
import Map from './Map';
import './Main.css';

const Main = () => (
  <main className="Main-wrapper">
    <ResortInfoCard />
    <Map />
  </main>
);

export default Main;
