import fetchFromPxb from './js/pixabay-api.js';
import makeMarkup from './js/render-functions.js';
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

function search(evt) {
  evt.preventDefault();

  if (inputField.value.trim() === '') {
    return;
  }

  marcupGallery.innerHTML = '';

  loadingMessage.classList.remove('visually-hidden');

  fetchFromPxb(inputField.value)
    .then(ans => {
      inputField.value = '';
      if (ans.hits.length === 0) {
        iziToast.show({
          messageColor: '#fff',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          timeout: 3000,
          maxWidth: '432px',
          messageSize: '16px',
          icon: 'material-icons',
          iconText: 'highlight_off',
          iconColor: '#ffffff',
          //   iconUrl: '../img/cancel-circle.svg',
          color: '#ef4040', // blue, red, green, yellow
          position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
        });
        throw new Error('there are no images matching your search query');
      }

      return ans.hits;
    })
    .then(images => {
      const markup = makeMarkup(images);

      marcupGallery.insertAdjacentHTML('beforeend', markup);

      lightbox1.refresh();
    })
    .catch(err => console.log(err))
    .finally(() => loadingMessage.classList.add('visually-hidden'));
}

const form = document.querySelector('form');

form.addEventListener('submit', search);
