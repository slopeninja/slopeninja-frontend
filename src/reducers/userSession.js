const initialState = {
  showEmailSignup: true,
  email: '',
};

export const SET_SHOW_NEWSLETTER_SUBSCRIPTION = 'SET_SHOW_NEWSLETTER_SUBSCRIPTION';
export const CREAT_NEWSLETTER_SUBSCRIPTION = 'CREAT_NEWSLETTER_SUBSCRIPTION';

const userSession = (state = initialState, action) => {
  if (action.type === SET_SHOW_NEWSLETTER_SUBSCRIPTION) {
    const newState = {
      ...state,
      showEmailSignup: false,
    };
    return newState;
  }
  if (action.type === CREAT_NEWSLETTER_SUBSCRIPTION) {
    const newState = {
      ...state,
      email: action.email,
    };
    return newState;
  }
  return state;
};

export default userSession;
