import search from './js/pixabay-api';

const form = document.querySelector('form');

form.addEventListener('submit', search);

// ================ ФС103, модуль 11, заняття 22 ==================

// const API_KEY = '677f8f030476123f76a701ab';
// const BASE_URL = `https://${API_KEY}.mockapi.io/api`;

// function fetchBooks() {
//   const options = {
//     method: 'GET',
//   };

//   return fetch(`${BASE_URL}/books`, options).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText); // response.statusText
//     }
//     return response.json();
//   });
// }

// function fetchBookById(bookId) {
//   const options = {
//     method: 'GET',
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, options).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText); // response.statusText
//     }
//     return response.json();
//   });
// }

// function addBook(book) {
//   const options = {
//     method: 'POST',
//     body: JSON.stringify(book),
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8',
//     },
//   };

//   return fetch(`${BASE_URL}/books`, options).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText); // response.statusText
//     }
//     return response.json();
//   });
// }

// function updateBookById(update, bookId) {
//   const options = {
//     method: 'PUT',
//     body: JSON.stringify(update),
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8',
//     },
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, options).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText); // response.statusText
//     }
//     return response.json();
//   });
// }

// function deleteBook(bookId) {
//   const options = {
//     method: 'DELETE',
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, options).then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText); // response.statusText
//     }
//     return response.json();
//   });
// }

// const book1 = {
//   id: '13',
//   titel: 'Lord of the rings III',
//   author: 'John Tolkien',
//   genres: ['chivalric novel', 'adventure', 'fantasy'],
//   rating: 30,
// };

// fetchBooks()
//   .then(data => console.log(data))
//   .catch(err => console.log(`❌ Something went wrong: ${err}`));

// fetchBookById(2)
//   .then(data => console.log(data))
//   .catch(err => console.log(`❌ Something went wrong: ${err}`));

// addBook(book1)
//   .then(data => console.log(data))
//   .catch(err => console.log(`❌ Something went wrong: ${err}`));

// updateBookById(book1, 2)
//   .then(data => console.log(data))
//   .catch(err => console.log(`❌ Something went wrong: ${err}`));

// deleteBook(13)
//   .then(data => console.log(data))
//   .catch(err => console.log(`❌ Something went wrong: ${err}`));
