const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("nav");
const link = document.querySelector('a')

export const navToggle = () => {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("slide");
  });
};

navToggle();
