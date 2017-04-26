import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { ThreeBounce } from 'better-react-spinkit';

import ResortNavCard from './ResortNavCard';
import './SideNav.css';

export const LoadingIndicator = () => (
  <div
    style={{
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <ThreeBounce size={36} color="#4A4A4A" />
  </div>
);

const ErrorIndicator = () => (
  <div
    style={{
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    Opps. Something{'\''}s not right.
  </div>
);

const SideNav = ({ resorts, resortsStatus, match }) => {
  const resortId = match.params.resortId;

  let hideSideNavOnMobileClassName;
  if (resortId) {
    hideSideNavOnMobileClassName = 'SideNav-hideOnMobile';
  }

  let sideNavContent;
  if (resortsStatus === 'success') {
    sideNavContent = resorts.map(resort => (
      <ResortNavCard key={resort.id} selected={resortId === resort.id} resort={resort} />
    ));
  }

  if (resortsStatus === 'fetching') {
    sideNavContent = (
      <LoadingIndicator />
    );
  }

  if (resortsStatus === 'fail') {
    sideNavContent = (
      <ErrorIndicator />
    );
  }

  const className = classNames(['SideNav-wrapper', hideSideNavOnMobileClassName]);

  return (
    <nav className={className}>
      {
        sideNavContent
      }
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    resorts: state.app.resorts,
    resortsStatus: state.app.resortsStatus,
  };
};

const ConnectedSideNav = connect(
  mapStateToProps,
)(SideNav);

export default ConnectedSideNav;
