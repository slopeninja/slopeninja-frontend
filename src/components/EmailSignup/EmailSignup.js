import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProgressButton from 'react-progress-button'

import cross from './cross.svg';
import snowboarders from '../FourOhFour/snowboarders.svg';
import './EmailSignup.css';

class EmailSignup extends Component {
  getInitialState() {
    return {
      buttonState: '',
    };
  }

  render() {
    if (this.props.showEmailSignup) {
      const EmailSignupTitle = () => (
        <div className="EmailSignupTitle-container">
          <div className="row no-gutters">
            <div className="col-12 col-md-auto">
              <div
                className="EmailSignupTitle-img"
              >
                <img
                  alt="snowboarders"
                  src={snowboarders}
                />
              </div>
            </div>
            <div className="col-12 col-md">
              <div className="EmailSignupTitle-content">
                <div
                  style={{
                    fontSize: '30px',
                    marginBottom: '0.5pc',
                    color: '#4A4A4A',
                  }}
                >
                  Want updates via email?
                </div>
                <div
                  style={{
                    fontSize: '16px',
                    marginBottom: '0.5pc',
                    fontWeight: '300',
                    color: '#4A4A4A',
                  }}
                >
                  We promise not to spam your inbox.
                </div>
              </div>
            </div>
          </div>
        </div>
      );

      const EmailSignupForm = () => (
        <div className="EmailSignupForm-container">
          <input
            type="email"
            name="email"
            placeholder="email"
            className="EmailSignupForm-input"
          />
            <ProgressButton >
              Submit
            </ProgressButton>
            <button
              name="cancle"
              className="EmailSignupForm-cross"
              onClick={this.props.disableEmailSignup}
            >
              <img alt="cancel" src={cross} />
            </button>
        </div>
      );

      return (
        <div className="EmailSignup-wrapper">
          <div className="row no-gutters">
            <div className="col-12 col-lg-6 col-xl-7">
              <EmailSignupTitle />
            </div>
            <div className="col-12 col-lg-6 col-xl-5">
              <EmailSignupForm />
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    showEmailSignup: state.app.userSession.showEmailSignup,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    disableEmailSignup: () => {
      dispatch({
        type: 'DISABLE_EMAILSIGNUP',
      });
    },

  };
};

const ConnectedEmailSignup = connect(mapStateToProps, mapDispatchToProps)(EmailSignup);

export default ConnectedEmailSignup;
