import React from 'react';
import './SideNav.css';
import ResortNavCard from './ResortNavCard';

const SideNav = () => (
  <nav className="SideNav-wrapper">
    <ResortNavCard />
    <ResortNavCard />
    <ResortNavCard />
    <ResortNavCard />
    <ResortNavCard />
    <ResortNavCard />
    <ResortNavCard />
  </nav>
);

export default SideNav;
