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
import EmailSignup from '../EmailSignup/EmailSignup';

import './App.css';

import { fetchResorts } from '../../actions/resorts';

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
    let emailSignup;
    if (this.props.showEmailSignup) {
      emailSignup = (
        <EmailSignup
          onDismissClick={this.props.disableEmailSignup}
        />
      );
    }
    return (
      <div className="App-wrapper">
        {emailSignup}
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
    resortsStatus: state.app.resorts.resortsStatus,
    showEmailSignup: state.app.userSession.showEmailSignup,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchResorts: () => {
      dispatch(fetchResorts);
    },
    disableEmailSignup: () => {
      dispatch({
        type: 'DISABLE_EMAILSIGNUP',
      });
    },
  };
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
