const initialState = {
  status: false,
  username: "",
  password: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "STATUS": {
      return {
        ...state,
        status: action.status,
      };
    }
    case "USERNAME": {
      return {
        ...state,
        username: action.username,
      };
    }
    case "PASSWORD": {
      return {
        ...state,
        password: action.password,
      };
    }
    default: {
      return state;
    }
  }
};
