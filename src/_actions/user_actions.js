import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  FETCH_USER_DATA,
} from "./types";
import { AUTH_SERVER } from "../Config";
import axios from "axios";

export function loginUser(dataToSubmit) {
  const request = axios
    .post("/auth/token/login/", dataToSubmit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToSubmit) {
  const request = axios
    .post(`${AUTH_SERVER}/signup/`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function fetchUserData() {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `token ${localStorage.getItem("key")}`,
  };
  const request = axios
    .get("/auth/users/me/", { headers: headers })
    .then((response) => response.data);

  return {
    type: FETCH_USER_DATA,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get(`${AUTH_SERVER}/logout`)
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
}
