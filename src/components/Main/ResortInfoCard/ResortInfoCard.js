import React from 'react';
import './ResortInfoCard.css';

const ResortInfoHeader = () => (
  <header className="ResortInfoHeader-header">
    <div className="ResortInfoHeader-branding">
      <figure className="ResortInfoHeader-logo">
        <img
          alt="logo"
          src="http://placehold.it/50x50"
        />
      </figure>
      <div>
        <h1 className="ResortInfoHeader-header-title">Sierra at Tahoe</h1>
        <h3 className="ResortInfoHeader-header-subtitle">
          {'Today\'s Forcast'}
        </h3>
      </div>
    </div>

    <div className="ResortInfoHeader-weatherinfo">
      <h3>Open</h3>
      <img
        alt="logo"
        src="http://placehold.it/50x50"
      />
    </div>
  </header>
);

const Box1 = () => (
  <div className="ResortInfoBox">
    <span className="ResortInfoBody-title">Temprature</span>
    <span className="ResortInfoBody-content">28°</span>
  </div>
);

const Box2 = () => (
  <div className="ResortInfoBox">
    <span className="ResortInfoBody-title">Base Condition</span>
    <span className="ResortInfoBody-content">Powder</span>
  </div>
);

const Box3 = () => (
  <div className="ResortInfoBox">
    <span className="ResortInfoBody-title">New Snow</span>
    <span className="ResortInfoBody-content">{'8"'}</span>
  </div>
);

const Box4 = () => (
  <div className="ResortInfoBox">
    <span className="ResortInfoBody-title">Snow Depth</span>
    <span className="ResortInfoBody-content">{'180"'}</span>
  </div>
);

const Box5 = () => (
  <div className="ResortInfoBox">
    <span className="ResortInfoBody-title">Open Routes</span>
    <div className="ResortInfoBody-content-openroutes">
      <img
        alt="logo"
        src="http://placehold.it/34x34"
      />
      <img
        alt="logo"
        src="http://placehold.it/34x34"
      />
      <img
        alt="logo"
        src="http://placehold.it/34x34"
      />
    </div>
  </div>
);

const Box6 = () => (
  <div className="ResortInfoBox">
    <span className="ResortInfoBody-title">Chains</span>
    <div className="ResortInfoBody-content-chains">
      <div className="ResortInfoBody-content-chains-row">
        <span className="ResortInfoBody-content-chains">R1</span>
        <img
          className="ResortInfoBody-content-chains-img"
          alt="logo"
          src="http://placehold.it/34x34"
        />
        <img
          className="ResortInfoBody-content-chains-img"
          alt="logo"
          src="http://placehold.it/34x34"
        />
      </div>
      <div className="ResortInfoBody-content-chains-row">
        <span className="ResortInfoBody-content-chains">R2</span>
        <img
          className="ResortInfoBody-content-chains-img"
          alt="logo"
          src="http://placehold.it/34x34"
        />
        <img
          className="ResortInfoBody-content-chains-img"
          alt="logo"
          src="http://placehold.it/34x34"
        />
      </div>
    </div>
  </div>
);

const Box7 = () => (
  <div className="ResortInfoBox">
    <span className="ResortInfoBody-title">Open Lifts</span>
    <div className="ResortInfoBody-content">
      <span>16</span>
      <img
        alt="logo"
        src="http://placehold.it/122x22"
      />
    </div>
  </div>
);

const Box8 = () => (
  <div className="ResortInfoBox">
    <span className="ResortInfoBody-title">Open Trails</span>
    <div className="ResortInfoBody-content">
      <span>32</span>
      <img
        alt="logo"
        src="http://placehold.it/122x22"
      />
    </div>
  </div>
);

const Row1 = () => (
  <div className="row">
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-3"
    >
      <Box1 />
    </div>
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-3"
    >
      <Box2 />
    </div>
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-3"
    >
      <Box3 />
    </div>
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-3"
    >
      <Box4 />
    </div>
  </div>
);

const Row2 = () => (
  <div className="row">
    <div
      className="col-xs-12 col-sm-12 col-md-12 col-lg-3"
    >
      <Box5 />
    </div>
    <div
      className="col-xs-12 col-sm-12 col-md-12 col-lg-3"
    >
      <Box6 />
    </div>
    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-3"
    >
      <Box7 />
    </div>

    <div
      className="col-xs-6 col-sm-6 col-md-6 col-lg-3"
    >
      <Box8 />
    </div>
  </div>
);

const ResortInfoBody = () => (
  <div className="ResortInfoBody">
    <Row1 />
    <Row2 />
  </div>
);

const ResortInfoCard = () => (
  <section className="ResortInfoCard">
    <ResortInfoHeader />
    <ResortInfoBody />
  </section>
);

export default ResortInfoCard;
