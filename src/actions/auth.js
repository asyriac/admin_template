import { LOGIN_SUCCESS, LOGOUT } from "./actionTypes";

export function login_success() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
