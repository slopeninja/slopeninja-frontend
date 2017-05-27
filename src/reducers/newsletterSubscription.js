import { STATE as BUTTON_STATE } from 'react-progress-button';

const initialState = {
  buttonState: BUTTON_STATE.NOTHING,
  email: '',
  newsletterSubscriptionStatus: null,
};

export const SEND_NEWSLETTER_SUBSCRIPTION = 'SEND_NEWSLETTER_SUBSCRIPTION';
export const SEND_NEWSLETTER_SUBSCRIPTION_SUCCESS = 'SEND_NEWSLETTER_SUBSCRIPTION_SUCCESS';
export const SEND_NEWSLETTER_SUBSCRIPTION_FAIL = 'SEND_NEWSLETTER_SUBSCRIPTION_FAIL';
export const SEND_NEWSLETTER_SUBSCRIPTION_RESET = 'SEND_NEWSLETTER_SUBSCRIPTION_RESET';

const createNewsletterSubscription = (state = initialState, action) => {
  if (action.type === SEND_NEWSLETTER_SUBSCRIPTION) {
    const newState = {
      ...state,
      buttonState: BUTTON_STATE.LOADING,
    };
    return newState;
  }

  if (action.type === SEND_NEWSLETTER_SUBSCRIPTION_SUCCESS) {
    const newState = {
      ...state,
      email: action.payload.email,
      buttonState: BUTTON_STATE.SUCCESS,
    };
    return newState;
  }

  if (action.type === SEND_NEWSLETTER_SUBSCRIPTION_FAIL) {
    const newState = {
      ...state,
      buttonState: BUTTON_STATE.ERROR,
    };
    return newState;
  }

  // This is a hack. See EmailSignup component for details.
  if (action.type === SEND_NEWSLETTER_SUBSCRIPTION_RESET) {
    const newState = {
      ...state,
      buttonState: BUTTON_STATE.NOTHING,
    };
    return newState;
  }

  return state;
};

export default createNewsletterSubscription;
