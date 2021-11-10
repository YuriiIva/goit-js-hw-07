import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) => {
    return `
     <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
}).join("");
galleryRef.insertAdjacentHTML("beforeend",markup);
console.log(galleryRef);


console.log(galleryItems);
