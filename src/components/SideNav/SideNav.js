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
  const shortName = match.params.shortName;
  let hideSideNavOnMobileClassName;
  if (shortName) {
    hideSideNavOnMobileClassName = 'SideNav-hideOnMobile';
  }

  let sideNavContent;
  if (resortsStatus === 'success') {
    sideNavContent = resorts.map(resort => (
      <ResortNavCard key={resort.shortName} selected={shortName === resort.shortName} resort={resort} />
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
      {
        sideNavContent
      }
      {
        sideNavContent
      }
      {
        sideNavContent
      }
      {
        sideNavContent
      }
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    resorts: state.app.resorts.resorts,
    resortsStatus: state.app.resorts.resortsStatus,
  };
};

const ConnectedSideNav = connect(
  mapStateToProps,
)(SideNav);

export default ConnectedSideNav;
