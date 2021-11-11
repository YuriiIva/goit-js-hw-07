import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const markUp = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
    `;
  })
  .join("");
galleryRef.insertAdjacentHTML("beforeend", markUp);

// galleryRef.addEventListener("click", handerImgClick);

new SimpleLightbox(".gallery a", {
  captions: "alt",
  captionsDelay: 250,
});

console.log(galleryItems);
