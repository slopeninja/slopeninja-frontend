import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import ResortNavCard from './ResortNavCard';

import './SideNav.css';

const SideNav = ({ resorts, match }) => {
  const resortId = match.params.resortId;

  let hideSideNavOnMobileClassName;
  if (resortId) {
    hideSideNavOnMobileClassName = 'SideNav-hideOnMobile';
  }

  const resortNavCards = resorts.map(resort => (
    <ResortNavCard key={resort.id} selected={resortId === resort.id} resort={resort} />
  ));

  const className = classNames(['SideNav-wrapper', hideSideNavOnMobileClassName]);

  return (
    <nav className={className}>
      {
        resortNavCards
      }
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    resorts: state.app.resorts,
  };
};

const ConnectedSideNav = connect(
  mapStateToProps,
)(SideNav);

export default ConnectedSideNav;
