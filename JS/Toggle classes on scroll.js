// Toggle add/remove classes on scroll event

window.addEventListener("scroll", function () {
  let scrollY = window.scrollY || window.pageYOffset;

  document.querySelector(".header")
    ?.classList.toggle("header-color", scrollY >= 40);

  document.querySelector(".go-up")
    ?.classList.toggle("hide3", scrollY < 800);
});
