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
import OpenSourceBanner from '../OpenSourceBanner/OpenSourceBanner';
import EmailSignup from '../EmailSignup/EmailSignup';
import Privacy from '../Privacy/Privacy';

import './App.css';

import { fetchResorts } from '../../actions/resorts';
// import { setShowNewsletterSubscription } from '../../actions/userSession';

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
          <LoadingIndicator />
          <Footer />
        </div>
      );
    }
    let emailSignup;
    if (this.props.showEmailSignup) {
      emailSignup = (
        <EmailSignup />
      );
    }
    return (
      <div>
        <Switch>
          <Route exact path="/privacy" component={Privacy} />
          <Route
            path="/"
            render={() => (
              <div className="App-wrapper">
                {emailSignup}
                <WeatherBanner />
                <OpenSourceBanner />
                <div className="App-content">
                  <Switch>
                    <Route exact path="/" component={RedirectToResorts} />
                    <Route exact path="/resorts/:shortName?" component={Main} />
                    <Route component={FourOhFour} />
                  </Switch>
                  <Route exact path="/resorts/:shortName?" component={SideNav} />
                </div>
                <Footer />
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    resortsStatus: state.app.resorts.resortsStatus,
    showEmailSignup: state.userSession.showEmailSignup,
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
