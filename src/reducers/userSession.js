const initialState = {
  showEmailSignup: true,
};

export const SET_SHOW_NEWSLETTER_SUBSCRIPTION = 'SET_SHOW_NEWSLETTER_SUBSCRIPTION';

const userSession = (state = initialState, action) => {
  if (action.type === SET_SHOW_NEWSLETTER_SUBSCRIPTION) {
    const subscriberEmail = action.payload.subscriberEmail;

    const newState = {
      ...state,
      showEmailSignup: false,
      subscriberEmail,
    };
    return newState;
  }
  return state;
};

export default userSession;
