burger = document.querySelector(".burger");
nav = document.querySelector("nav");
logo = document.querySelector("nav .logo");
list = document.querySelector("nav ul");

burger.addEventListener("click", navResponsive);

function navResponsive() {
    nav.classList.toggle("beforeNav");
    logo.classList.toggle("invisible");
    list.classList.toggle("invisible");
}