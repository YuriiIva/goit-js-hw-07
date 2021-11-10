import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `
     <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;
  })
  .join("");
galleryRef.insertAdjacentHTML("beforeend", markup);

let instance = null;

function handlerImgclick(e) {
  e.preventDefault();
  const targetElem = e.target.tagName;
  if (targetElem !== "IMG") {
    return;
  }
  const previewT = e.target.dataset.source;

  instance = basicLightbox.create(`
    <img src="${previewT}" width="800" height="600">
`);
  instance.show();
}

galleryRef.addEventListener("click", handlerImgclick);

function handerEsc(e) {
  if (e.code === "Escape") {
      console.log(e);
    instance.close();
  }
}

window.addEventListener("keydown", handerEsc);
console.log(galleryItems);
