const initialState = {
  showEmailSignup: true,
};

const userSession = (state = initialState, action) => {
  if (action.type === "DISABLE_EMAILSIGNUP" ){
    const newState = {
      ...state,
      showEmailSignup: false
    }
    return newState;
  }
  return state;
}

export default userSession;
