// use setAttribute to change visibility of pages
// try title.classList.toggle("article__title_theme_dark"); structure

// for adding posts, use a <template> then insertAdjacentHTML()

const postContent = document.querySelector(".homeContent");
const contentHomeBtn = postContent.querySelector(".posts__home-btn");
const cardsContent = postContent.querySelector(".cards");

console.log(cardsContent.classList);

function openToggle() {
    cardsContent.classList.toggle("VisToggle");
    console.log("works");
}

contentHomeBtn.addEventListener("click", openToggle);