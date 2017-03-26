import React from 'react';
import './SideNav.css';
import ResortNavCard from './ResortNavCard';

export const resortsDb = [
  {
    id: 0,
    name: 'Squaw Valley',
    location: 'Olympic Valley, CA 96146',
    lifts: {
      total: 10,
      open: 5,
    },
    trails: {
      total: 23,
      open: 18,
    },
  },
  {
    id: 1,
    name: 'Sierra-at-Tahoe',
    location: 'Olympic Valley, CA 96146',
    lifts: {
      total: 10,
      open: 5,
    },
    trails: {
      total: 23,
      open: 18,
    },
  },
];

const SideNav = () => {
  const resortNavCards = resortsDb.map(resort => (
    <ResortNavCard key={resort.id} resort={resort} />
  ));

  return (
    <nav className="SideNav-wrapper">
      {
        resortNavCards
      }
    </nav>
  );
};

export default SideNav;
