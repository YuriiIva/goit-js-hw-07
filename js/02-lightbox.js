import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const markup = galleryItems.map(({preview, original, description}) => {
  return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
    `;
}).join("");
galleryRef.insertAdjacentHTML("beforeend",markup);

const handerImgClick = (e) => {
    e.preventDefault();
    if(e.target.tagName !== "IMG") {
        return;
    }
    let gallery = new SimpleLightbox('.gallery a');
    gallery.on('show.simplelightbox', function () {
        // do something…
    });
};
galleryRef.addEventListener('click', handerImgClick);


console.log(galleryItems);
