const baseUrl = "http://localhost:3001";
import { getToken } from "./auth";

function checkRes(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getPosts() {
  return fetch(`${baseUrl}/posts`).then(checkRes);
}

function addPost({ title, author, date, description, url }) {
  return fetch(`${baseUrl}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ title, author, date, description, url }),
  }).then(checkRes);
}

function deletePost(cardId) {
  return fetch(`${baseUrl}/posts/${cardId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
  }).then(checkRes);
}

export { checkRes, addPost, getPosts, deletePost };
