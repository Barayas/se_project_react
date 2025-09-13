import { baseUrl } from "../utils/constants";

export function checkResponse(res) {
  if (res.ok) {
    if (res.status === 204) {
      return Promise.resolve({});
    } else {
      return res.json();
    }
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

function getItems() {
  return request(`${baseUrl}/items`).then((data) =>
    data.map((item, index) => ({
      ...item,
      _id: item._id || item.id || `fallback-${index}`,
      link: item.imageUrl || item.link,
    }))
  );
}

function addItem({ name, imageUrl, weather, owner }) {
  const token = localStorage.getItem("jwt");
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl,
      owner,
    }),
  });
}

function deleteItem(id, token) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function addCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function removeCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export { getItems, addItem, deleteItem, addCardLike, removeCardLike };
