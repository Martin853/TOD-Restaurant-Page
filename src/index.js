// Import

import "./styles/main.css";
import home from "./home";
import menu from "./menu";
import contact from "./contact";

// Variables

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

// Remove Content

function removeContent() {
  // Set default body heigt

  document.body.style.height = "150vh";

  const contentHolder = document.querySelector("#content-holder");
  const content = Array.from(contentHolder.children);

  content.forEach((element) => {
    element.remove();
  });
}

// Buttons listeners

// Home

homeButton.addEventListener("click", function () {
  removeContent();
  home();
});

// Menu

menuButton.addEventListener("click", function () {
  removeContent();
  menu();
});

// Contact

contactButton.addEventListener("click", function () {
  removeContent();
  contact();
});

// Initialize the site function

home();
