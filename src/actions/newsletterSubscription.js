import {
  SEND_NEWSLETTER_SUBSCRIPTION,
  SEND_NEWSLETTER_SUBSCRIPTION_SUCCESS,
  SEND_NEWSLETTER_SUBSCRIPTION_FAIL,
  SEND_NEWSLETTER_SUBSCRIPTION_RESET,
} from '../reducers/newsletterSubscription';

import { setShowNewsletterSubscription } from './userSession';

import {
  sendNewsletterSubscription,
} from '../api';

// aciton creator
const newsletterSubscription = () => ({
  type: SEND_NEWSLETTER_SUBSCRIPTION,
});

// aciton creator
const newsletterSubscriptionSuccess = email => ({
  type: SEND_NEWSLETTER_SUBSCRIPTION_SUCCESS,
  payload: {
    email,
  },
});

// aciton creator
export const newsletterSubscriptionFail = error => ({
  type: SEND_NEWSLETTER_SUBSCRIPTION_FAIL,
  payload: {
    error,
  },
});

// aciton creator
export const newsletterSubscriptionReset = () => ({
  type: SEND_NEWSLETTER_SUBSCRIPTION_RESET,
});

const EMAIL_SIGNUP_DISMISS_DURATION = 800;

// thunk
export const createNewsletterSubscription = email => async (dispatch) => {
  dispatch(newsletterSubscription());
  try {
    const data = await sendNewsletterSubscription(email);
    dispatch(newsletterSubscriptionSuccess(data.email));

    setTimeout(() => {
      dispatch(setShowNewsletterSubscription(email));
    }, EMAIL_SIGNUP_DISMISS_DURATION);
  } catch (error) {
    dispatch(newsletterSubscriptionFail(error.message));
  }
};
