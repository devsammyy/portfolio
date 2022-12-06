const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("nav");

export const navToggle = () => {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("slide");
  });
};

navToggle();
