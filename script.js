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
