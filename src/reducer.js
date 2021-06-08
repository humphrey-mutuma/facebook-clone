export const initialState = {
  user: null, //user not logged in initially
};

// actions 
export const actionTypes = {
  SET_USER: "SET_USER", 
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user, //change user to the new user payload 
      };
    default:
      return state;
  }
};

export default reducer;
