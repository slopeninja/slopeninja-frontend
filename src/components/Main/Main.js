import React from 'react';
import ResortInfoCard from './ResortInfoCard/ResortInfoCard';
import Map from './Map';
import './Main.css';

import { resortsDb } from '../SideNav/SideNav';

const Main = props => (
  <main className="Main-wrapper">
    <ResortInfoCard resort={resortsDb[props.match.params.resortId]} />
    <Map />
  </main>
);

export default Main;
