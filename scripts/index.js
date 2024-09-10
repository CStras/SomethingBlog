const postContent = document.querySelector(".homeContent");
const contentHomeBtn = postContent.querySelector(".posts__home-btn");
const cardsContent = postContent.querySelector(".cards");

function mainToggle() {
    cardsContent.classList.toggle("VisToggle");
}
contentHomeBtn.addEventListener("click", mainToggle);

function menuToggle() {
    menu.classList.toggle("VisToggle");
}
const menuBtn = document.querySelector(".header__menu");
const menu = document.querySelector(".header__drop");
menuBtn.addEventListener("click", menuToggle);