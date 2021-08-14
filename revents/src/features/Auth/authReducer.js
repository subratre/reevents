import { SIGN_OUT_USER, SIGN_IN_USER } from "./authConstants";

const initialState = {
  authenticated: false,
  currentUser: null,
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SIGN_IN_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: {
          email: payload.email,
          photoURL: "/assets/user.png",
        },
      };
      break;
    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        currentUser: null,
      };
      break;
    default:
      return state;
      break;
  }
}
