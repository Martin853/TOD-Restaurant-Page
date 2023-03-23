// Import

import "./styles/main.css";
import home from "./home";

// Variables

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("menu");
const contanctButton = document.querySelector("contact");

// Remove Content

function removeContent() {
  const content = document.querySelector("#content-holder").children;

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

menuButton.addEventListener("click", function () {});

// Contact

contactButton.addEventListener("click", function () {});

// Initialize the site function

home();
