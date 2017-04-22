const initialState = {
  resorts: [],
};

function reducer(state = initialState, action) {


  if (action.type === 'STORE_RESORTS_IN_RERUCER_FROM_API') {
    const newState = {
      ...state,
      resorts: action.resorts,
    };
    return newState;
  }

  return state;
}


export default reducer;
