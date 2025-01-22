const initialState = {
  users: [],
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      console.log("FETCH_USERS_REQUEST", state);
      
      return {
        ...state,
        loading: true,
      };
    case "FETCH_USERS_SUCCESS":
      console.log("FETCH_USERS_SUCCESS", state);
      let newState = structuredClone(state);
      newState = {
        ...newState,
        loading: false,
        users: action.payload,
      }
      return newState;
    case "FETCH_USERS_FAILURE":
      console.log("FETCH_USERS_FAILURE", state);

      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
