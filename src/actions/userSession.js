import {
  SET_SHOW_NEWSLETTER_SUBSCRIPTION,
} from '../reducers/userSession';

export const setShowNewsletterSubscription = async (dispatch) => {
  dispatch({
    type: SET_SHOW_NEWSLETTER_SUBSCRIPTION,
  });
};
