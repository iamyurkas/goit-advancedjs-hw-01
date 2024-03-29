// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
    .map(
        ({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
</li>`
    )
    .join("");

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

new SimpleLightbox(".gallery__link", {
    captionsData: "alt",
    captions: true,
    captionDelay: 250,
});

console.log(galleryItems);
