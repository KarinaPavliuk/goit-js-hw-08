import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryElement(galleryItems);
listEl.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryElement(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
              </a>
            </li>`;
    })
    .join('');
}

createGalleryElement(galleryItems);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
