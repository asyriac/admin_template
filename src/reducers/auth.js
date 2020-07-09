import { LOGIN_SUCCESS, LOGOUT } from "../actions/actionTypes";

const initialState = {
  isLoggedIn: true,
};

export default function authenticate(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
