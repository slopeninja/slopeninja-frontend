import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Main from '../Main/Main';
import SideNav from '../SideNav/SideNav';
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
    console.log('componentWillReceiveProps')
  }

  render() {
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchResorts: () => {
      dispatch(fetchResorts);
    },
  };
};

const ConnectedApp = connect(null, mapDispatchToProps)(App);

export default ConnectedApp;
