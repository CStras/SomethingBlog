const postContent = document.querySelector(".homeContent");
const contentHomeBtn = postContent.querySelector(".posts__home-btn");
const cardsContent = postContent.querySelector(".cards");

const menuBtn = document.querySelector(".header__menu");
const menu = document.querySelector(".header__drop");
const dropMenu = menu.querySelector(".drop__circle");

const addPostModal = document.querySelector("#add-card-modal");
const addPostBtn = document.querySelector("#add-post-btn");
const closePostBtn = addPostModal.querySelector(".modal__close-btn");


function openModal() {
    addPostModal.classList.add("modal_opened");
}

function closeModal() {
    addPostModal.classList.remove("modal_opened");
}


function mainToggle() {
    cardsContent.classList.toggle("VisToggle");
}

contentHomeBtn.addEventListener("click", mainToggle);

function menuToggle() {
    menu.classList.toggle("VisToggle");
    menu.classList.toggle("header__drop-b4");
    dropMenu.classList.toggle("drop__circle-b4");
}

menuBtn.addEventListener("click", menuToggle);

addPostBtn.addEventListener("click", openModal);

closePostBtn.addEventListener("click", closeModal);