import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  FETCH_USER_DATA,
} from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case LOGOUT_USER:
      return { ...state };
    case FETCH_USER_DATA:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
