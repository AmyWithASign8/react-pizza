const initialState = {
  user: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "DELETE_USER":
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};

export default user;
