export const istate = {
  Username: "",
  Password: "",
  State: "",
  name: "",
  DOB: "",
  city: "",
};

export const reducer = (state = istate, action) => {
  switch (action.type) {
    case "USERNAME": {
      return {
        ...state,
        Username: action.Username,
      };
    }
    case "PASSWORD": {
      return {
        ...state,
        Password: action.Password,
      };
    }
    case "STATUS": {
      return {
        ...state,
        status: action.status,
      };
    }
    case "NAME": {
      return {
        ...state,
        name: action.name,
      };
    }
    case "DOB": {
      return {
        ...state,
        DOB: action.DOB,
      };
    }
    case "CITY": {
      return {
        ...state,
        city: action.city,
      };
    }
    default: {
      return state;
    }
  }
};
