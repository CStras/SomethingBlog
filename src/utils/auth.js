import { checkRes } from "./api.js";

const baseURL = "http://localhost:3001";

export const login = ({ email, password }) => {
  return fetch(`${baseURL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkRes);
};

export function getToken() {
  return localStorage.getItem("jwt");
}

export function setToken(token) {
  return localStorage.setItem("jwt", token);
}

export const checkToken = (token) => {
  return fetch(`${baseURL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkRes);
};
