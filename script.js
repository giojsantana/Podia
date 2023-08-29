"use strict";

const linkTitle = [...document.querySelectorAll(".link-title")];

linkTitle.forEach((link) => {
  link.addEventListener("click", function () {
    link.querySelector("span").classList.toggle("arrow-flip");
    link.parentElement
      .querySelector(".footer-links")
      .classList.toggle("footer-link-active");
  });
});

const navBtn = document.querySelectorAll(".nav-link--btn");

navBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("nav-link--btn") ||
      e.target.classList.contains("md")
    ) {
      btn.querySelector(".nav-dropdown").classList.toggle("nav-drop-close");
    }
  });
});
