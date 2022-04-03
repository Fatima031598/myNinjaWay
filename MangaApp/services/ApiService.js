const baseUrl = 'http://localhost:5050';
// require('dotenv').config();

const getMangas = async () => {
  return fetch(`${baseUrl}/mangas`)
    .then((res) => res.json())
    .catch((e) => console.log(e));
};
const postUser = async (data) => {
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
const login = async (data) => {
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

// const textToSpeech = (data) => {
//   return fetch(
//     // `https://texttospeech.googleapis.com/v1/text:synthesize?key=${process.env.API_KEY}`,
//     'https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyDNsHD1QxenE9df6FZPU1O5279wYEwcqL4',
//     {
//       method: 'POST',
//       mode: 'cors',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         audioConfig: {
//           audioEncoding: 'MP3',
//           pitch: 0,
//         },
//         input: {
//           text: `${data}`,
//         },
//         voice: {
//           languageCode: 'en-US',
//           ssmlGender: 'MALE',
//         },
//       }),
//     },
//   )
//     .then((res) => res.json())
//     .catch((e) => console.log(e));
// };

export default { getMangas, postUser, login };
