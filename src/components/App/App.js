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

const API_URL = 'http://localhost:1234';

const RedirectToResorts = () => (
  <Redirect to="/resorts" />
);

class App extends Component {
  async componentDidMount() {
    try {
      const response = await fetch(`${API_URL}/resorts`)
      const resortData = await response.json();
      this.props.saveResorts(resortData);
    } catch(error) {
    }
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
    saveResorts: (resortData) => {
      dispatch({
        type: 'STORE_RESORTS_IN_RERUCER_FROM_API',
        resorts: resortData.resorts,
      });
    },
  };
};

const ConnectedApp = connect(null, mapDispatchToProps)(App);

export default ConnectedApp;
