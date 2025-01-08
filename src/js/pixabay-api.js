import makeMarkup from './render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputField = document.querySelector('.query');
const marcupGallery = document.querySelector('.gallery');
const loadingMessage = document.querySelector('.loading-message');

let lightbox1 = new SimpleLightbox('.gallery .gallery-link', {
  captionsData: '<input type="email" name="email" autofocus />', //'alt',
  captionDelay: 250,
  /* options */
});

export default function search(evt) {
  evt.preventDefault();

  if (inputField.value.trim() === '') {
    return;
  }

  marcupGallery.innerHTML = '';

  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '47762015-3b880641f1939f09591269c8d';

  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: inputField.value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  loadingMessage.classList.remove('visually-hidden');

  return fetch(`${BASE_URL}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(ans => {
      inputField.value = '';
      if (ans.hits.length === 0) {
        iziToast.show({
          messageColor: '#fff',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          timeout: 1000,
          maxWidth: '432px',
          messageSize: '16px',
          iconUrl: '../img/cancel-circle.svg',
          color: '#ef4040', // blue, red, green, yellow
          position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        });
        throw new Error('there are no images matching your search query');
      }

      return ans.hits;
    })
    .then(images => {
      const markup = makeMarkup(images);

      // const marcupGallery = document.querySelector('.gallery');
      marcupGallery.insertAdjacentHTML('beforeend', markup);

      // new SimpleLightbox('.gallery .gallery-link', {
      //   captionsData: '<input type="email" name="email" autofocus />', //'alt',
      //   captionDelay: 250,
      //   /* options */
      // });
      lightbox1.refresh();
    })
    .catch(err => console.log(err))
    .finally(() => loadingMessage.classList.add('visually-hidden'));
}
