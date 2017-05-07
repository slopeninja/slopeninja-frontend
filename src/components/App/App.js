import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import
SideNav, {
  LoadingIndicator,
} from '../SideNav/SideNav';

import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import FourOhFour from '../FourOhFour/FourOhFour';
import WeatherBanner from '../WeatherBanner/WeatherBanner';

import './App.css';

import { fetchResorts } from '../../actions';

const RedirectToResorts = () => (
  <Redirect to="/resorts" />
);

class App extends Component {
  componentDidMount() {
    this.props.fetchResorts();
  }

  componentWillReceiveProps() {
  }

  render() {
    if (this.props.resortsStatus === 'fetching') {
      return (
        <div className="App-wrapper">
          <WeatherBanner />
          <LoadingIndicator />
          <Footer />
        </div>
      );
    }
    return (
      <div className="App-wrapper">
        <WeatherBanner />
        <div className="App-content">
          <Switch>
            <Route exact path="/" component={RedirectToResorts} />
            <Route exact path="/resorts/:resortId?" component={Main} />
            <Route component={FourOhFour} />
          </Switch>
          <Route exact path="/resorts/:resortId?" component={SideNav} />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    resortsStatus: state.app.resortsStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchResorts: () => {
      dispatch(fetchResorts);
    },
  };
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
