import {
  SET_SHOW_NEWSLETTER_SUBSCRIPTION,
} from '../reducers/userSession';

export const setShowNewsletterSubscription = (dispatch) => {
  dispatch({
    type: SET_SHOW_NEWSLETTER_SUBSCRIPTION,
  });
};
