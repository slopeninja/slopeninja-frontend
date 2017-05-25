import {
  SET_SHOW_NEWSLETTER_SUBSCRIPTION,
  CREAT_NEWSLETTER_SUBSCRIPTION,
} from '../reducers/userSession';

export const setShowNewsletterSubscription = (dispatch) => {
  dispatch({
    type: SET_SHOW_NEWSLETTER_SUBSCRIPTION,
  });
};

// TODO: refactor out into newsletterSubscription Actions and Reducer
export const createNewsletterSubscription = email => (dispatch) => {
  dispatch({
    type: CREAT_NEWSLETTER_SUBSCRIPTION,
    email,
  });
};
