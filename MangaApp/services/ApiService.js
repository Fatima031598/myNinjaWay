const baseUrl = 'http://localhost:5050';

const getMangas = () => {
  return fetch(`${baseUrl}/mangas`)
    .then((res) => res.json())
    .catch((e) => console.log(e));
};
const postUser = (data) => {
  return fetch(`${baseUrl}/users`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
};
const login = (data) => {
  return fetch(`${baseUrl}/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
};

export default { getMangas, postUser, login };
