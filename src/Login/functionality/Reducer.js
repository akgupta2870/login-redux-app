const initialState = {
  status: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "STATUS": {
      return {
        ...state,
        status: action.status,
      };
    }
    default: {
      return state;
    }
  }
};
