"use strict";
const palette1 = document.getElementById("color-option1");
const palette2 = document.getElementById("color-option2");
const palette3 = document.getElementById("color-option3");

const card = document.querySelector(".js-card");

function changeColorPalette1() {
  card.classList.remove("js-card-palette2");
  card.classList.remove("js-card-palette3");
  card.classList.add("js-card-palette1");
}

function changeColorPalette2() {
  card.classList.remove("js-card-palette1");
  card.classList.remove("js-card-palette3");
  card.classList.add("js-card-palette2");
}

function changeColorPalette3() {
  card.classList.remove("js-card-palette1");
  card.classList.remove("js-card-palette2");
  card.classList.add("js-card-palette3");
}

palette1.addEventListener("click", changeColorPalette1);
palette2.addEventListener("click", changeColorPalette2);
palette3.addEventListener("click", changeColorPalette3);
