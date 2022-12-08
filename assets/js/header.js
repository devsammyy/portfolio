export const navToggle = () => {
  const hamburger = document.querySelector("#hamburger");
  const nav = document.querySelector("nav");
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("slide");
  });
};

export const modeToggle = () => {
  const mode = document.querySelector("#light-mode");
  const a = document.querySelectorAll('a');
  const button = document.querySelectorAll('button')[2];
  const service = document.querySelectorAll('.service');
  const stack = document.querySelectorAll('.stack');

  const body = document.body

  mode.addEventListener("click", () => {
    // a.forEach(x => x.classList.toggle('a'));
    button.classList.toggle('a');
    service.forEach(x => x.classList.toggle('dark'));
    stack.forEach(x => x.classList.toggle('dark'));
    body.classList.toggle("light")
  })
}


