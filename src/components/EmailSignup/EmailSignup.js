import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Control, Form, actions } from 'react-redux-form';
import ProgressButton, { STATE as BUTTON_STATE } from 'react-progress-button';

import snowboarders from '../FourOhFour/snowboarders.svg';
import './EmailSignup.css';

import { setShowNewsletterSubscription } from '../../actions/userSession';
import {
  createNewsletterSubscription,
  newsletterSubscriptionFail,
  newsletterSubscriptionReset,
} from '../../actions/newsletterSubscription';

import { isValidEmail, isNotEmpty } from '../../util/validators';

const BUTTON_ERROR_DISMISS_DURATION = 1200;
const BUTTON_SUCCESS_DISMISS_DURATION = 1200;

// FIXME: This is here until the following bug is fixed:
// https://github.com/davidkpiano/react-redux-form/issues/777
const preventFormSubmissionOnEnter = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
};

const EmailSignupForm = ({
  onFormSubmit,
  onFormSubmitFailed,
  onDismissClick,
  submitButtonStatus,
}) => (
  <Form
    className="EmailSignupForm-container"
    model="forms.newsletterSubscription"
    onSubmitFailed={onFormSubmitFailed}
    onSubmit={onFormSubmit}
  >
    <Control.text
      type="email"
      className="EmailSignupForm-input"
      placeholder="email"
      model="forms.newsletterSubscription.email"
      validators={{
        required: isNotEmpty,
        email: isValidEmail,
      }}
      onKeyPress={preventFormSubmissionOnEnter}
    />
    <ProgressButton
      controlled
      state={submitButtonStatus}
      type="submit"
      shouldAllowClickOnLoading={false}
      durationError={BUTTON_ERROR_DISMISS_DURATION}
      durationSuccess={BUTTON_SUCCESS_DISMISS_DURATION}
    >
      Submit
    </ProgressButton>
    <button
      type="button"
      className="EmailSignupForm-cross"
      onClick={onDismissClick}
    >
      <svg className="pb-cancel-cross" viewBox="0 0 70 70">
        <path d="m35,35l-9.3,-9.3" />
        <path d="m35,35l9.3,9.3" />
        <path d="m35,35l-9.3,9.3" />
        <path d="m35,35l9.3,-9.3" />
      </svg>
    </button>
  </Form>
);

class EmailSignup extends Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormSubmitFailed = this.handleFormSubmitFailed.bind(this);

    this.buttonResetTimeout = null;
  }

  componentWillUnmount() {
    clearTimeout(this.buttonResetTimeout);
  }

  handleFormSubmitFailed() {
    this.props.failNewsletterSubscription('Invalid Email');

    // react-progress-button isn't a fully controlled component,
    // so we need to sync states
    this.buttonResetTimeout = setTimeout(() => {
      this.props.resetNewsletterSubscription();
    }, BUTTON_ERROR_DISMISS_DURATION);
  }

  handleFormSubmit(newsletterSubscription) {
    const email = newsletterSubscription.email;
    this.props.createNewsletterSubscription(email);
  }

  render() {
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

    return (
      <div className="EmailSignup-wrapper">
        <div className="row no-gutters">
          <div className="col-12 col-lg-6 col-xl-7">
            <EmailSignupTitle />
          </div>
          <div className="col-12 col-lg-6 col-xl-5">
            <EmailSignupForm
              onFormSubmit={this.handleFormSubmit}
              onFormSubmitFailed={this.handleFormSubmitFailed}
              submitButtonStatus={this.props.buttonState}
              onDismissClick={this.props.onDismissClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    buttonState: state.app.createNewsletterSubscription.buttonState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    disableEmailSignup: () => {
      dispatch(setShowNewsletterSubscription);
    },
    createNewsletterSubscription: (email) => {
      dispatch(createNewsletterSubscription(email));
    },
    failNewsletterSubscription: (errorMessage) => {
      dispatch(newsletterSubscriptionFail(errorMessage));
    },
    resetNewsletterSubscription: () => {
      dispatch(newsletterSubscriptionReset());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailSignup);
