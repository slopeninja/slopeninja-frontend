import {
  SET_SHOW_NEWSLETTER_SUBSCRIPTION,
} from '../reducers/userSession';

export const setShowNewsletterSubscription = (subscriberEmail) => (dispatch) => {
  dispatch({
    type: SET_SHOW_NEWSLETTER_SUBSCRIPTION,
    payload: {
      subscriberEmail,
    },
  });
};
