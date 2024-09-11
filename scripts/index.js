const postContent = document.querySelector(".homeContent");
const contentHomeBtn = postContent.querySelector(".posts__home-btn");
const cardsContent = postContent.querySelector(".cards");

function mainToggle() {
    cardsContent.classList.toggle("VisToggle");
}
contentHomeBtn.addEventListener("click", mainToggle);

function menuToggle() {
    menu.classList.toggle("VisToggle");
    menu.classList.toggle("header__drop-b4");
    dropMenu.classList.toggle("drop__circle-b4");
}
const menuBtn = document.querySelector(".header__menu");
const menu = document.querySelector(".header__drop");
const dropMenu = menu.querySelector(".drop__circle");
menuBtn.addEventListener("click", menuToggle);