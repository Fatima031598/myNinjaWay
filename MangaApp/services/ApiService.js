const baseUrl = 'http://localhost:5050/mangas';
// const baseUrl = 'https://api.jikan.moe/v4/top/manga';

const getMangas = () => {
  return fetch(baseUrl)
    .then((res) => res.json())
    .catch((e) => console.log(e));
};
const postUser = (data) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((e) => console.log(e));
};

export default { getMangas, postUser };
