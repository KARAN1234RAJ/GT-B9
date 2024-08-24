// Define the API URL
// const apiUrl = 'https://api.example.com/data';

// // Make a GET request
// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
//==========================================
let api = "https://dummyapi.online/api/products";
fetch(api)
  .then((response) => response.json().then((data) => console.log(data)))
  .catch((error) => console.warn({error:error}));

//============================================

// async function getUserData() {
//   let response = await fetch(api);
//   let data = await response.json();
//   return data;
// }

// getUserData().then((data) => {
//   console.log(data);
// });


