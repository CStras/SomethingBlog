const baseUrl = "http://localhost:3001";

function checkRes(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getPosts() {
  return fetch(`${baseUrl}/posts`).then(checkRes);
}

function addPost({ name, weather, imageUrl }) {
  return fetch(`${baseUrl}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ name, weather, imageUrl }),
  }).then(checkRes);
}

export { checkRes, addPost, getPosts };
