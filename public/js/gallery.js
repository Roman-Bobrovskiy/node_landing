import gallery from "./gallery-items.js";
let previewGallery = document.querySelector(".js-gallery");
let modalWindow = document.querySelector(".js-lightbox");
let modalImg = document.querySelector(".lightbox__image");
let closeWindow = document.querySelector(".lightbox__button");
let closeOverlay = document.querySelector(".lightbox__overlay");

let imgarr = [];
gallery.forEach(({ preview, description, original }) => {
  let li = document.querySelector(".gallery");
  li.insertAdjacentHTML(
    "afterbegin",
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
    </a>
  </li>`
  );
  imgarr.push(original);
});
// console.log(imgarr);

previewGallery.addEventListener("click", openModalWindow);
closeWindow.addEventListener("click", closeModalWindow);

function openModalWindow(event) {
  event.preventDefault();
  modalWindow.classList.add("is-open");
  modalImg.src = event.target.dataset.source;
  // console.log(event.target.alt);
  window.addEventListener("keydown", keys);
  closeOverlay.addEventListener("click", closeModalWindow);
}

function closeModalWindow(event) {
  event.preventDefault();
  modalWindow.classList.remove("is-open");
  window.removeEventListener("keydown", keys);
  closeOverlay.removeEventListener("click", closeModalWindow);
}
let index = 0;
function keys(event) {
  if (event.code === "Escape") {
    modalWindow.classList.remove("is-open");
    window.removeEventListener("keydown", keys);
    closeOverlay.removeEventListener("click", closeModalWindow);
  }
  if (event.code === "ArrowRight") {
    // console.log(imgarr);
    index -= 1;
    if (index < 0) {
      index = imgarr.length - 1;
    }
    // console.log(index);
    modalImg.src = imgarr[index];
  }
  if (event.code === "ArrowLeft") {
    // console.log(index);
    index += 1;
    if (index >= imgarr.length) {
      index = 0;
    }
    modalImg.src = imgarr[index];
  }
}
