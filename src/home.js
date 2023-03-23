import imageSource from "../src/images/cucina-italiana.png";

const contentHolder = document.querySelector("#content-holder");

function home() {
  // Background image setting

  const body = document.getElementsByTagName("body")[0];
  body.style.backgroundImage = "url(../src/images/home-background.jpg)";
  body.style.backgroundSize = "cover";
  body.style.backgroundPosition = "center";
  body.style.backgroundRepeat = "no-repeat";

  // Adding logo
  const image = document.createElement("img");
  image.src = imageSource;
  image.style.width = "250px";
  image.style.height = "250px";
  contentHolder.appendChild(image);

  // Adding text to the screen

  const text = document.createElement("h1");
  text.innerText =
    "Welcome to Cucina Italiana! Our Italian restaurant is the perfect place for you to enjoy authentic Italian cuisine in the comfort of your own home. Our home section offers a range of delicious dishes that you can easily prepare and enjoy in your own kitchen.";
  contentHolder.appendChild(text);
}

export default home;
