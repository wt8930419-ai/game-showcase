"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const qrDialog = document.querySelector("#qr-dialog");
const imageDialog = document.querySelector("#image-dialog");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#image-caption");
const galleryButtons = Array.from(document.querySelectorAll(".gallery-track .gallery-open"));
const previousButton = document.querySelector(".lightbox-prev");
const nextButton = document.querySelector(".lightbox-next");
let selectedImage = 0;

menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  navigation.classList.toggle("is-open", !expanded);
  let label = "打开导航";
  if (!expanded) {
    label = "关闭导航";
  }
  menuButton.setAttribute("aria-label", label);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "打开导航");
  });
});

document.querySelectorAll(".qr-trigger").forEach((button) => {
  button.addEventListener("click", () => {
    qrDialog.showModal();
    document.body.classList.add("dialog-open");
  });
});

function showImage(index) {
  selectedImage = index;
  const button = galleryButtons[index];
  lightboxImage.src = button.dataset.image;
  lightboxImage.alt = button.querySelector("img").alt;
  lightboxCaption.textContent = button.dataset.caption;
  previousButton.disabled = index === 0;
  nextButton.disabled = index === galleryButtons.length - 1;
}

document.querySelectorAll(".gallery-open").forEach((button) => {
  button.addEventListener("click", () => {
    const index = galleryButtons.findIndex((item) => item.dataset.image === button.dataset.image);
    showImage(index);
    imageDialog.showModal();
    document.body.classList.add("dialog-open");
  });
});

previousButton.addEventListener("click", () => {
  showImage(selectedImage - 1);
});
nextButton.addEventListener("click", () => {
  showImage(selectedImage + 1);
});
imageDialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" && selectedImage > 0) {
    event.preventDefault();
    showImage(selectedImage - 1);
  }
  if (event.key === "ArrowRight" && selectedImage < galleryButtons.length - 1) {
    event.preventDefault();
    showImage(selectedImage + 1);
  }
});

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.querySelector(".dialog-close").addEventListener("click", () => {
    dialog.close();
  });
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) {
      return;
    }
    const rect = dialog.getBoundingClientRect();
    const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
    if (outside) {
      dialog.close();
    }
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
  });
});
