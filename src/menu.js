const contentHolder = document.querySelector("#content-holder");

function menu() {
  document.body.style.height = "250vh";

  const menuHolder = document.createElement("div");
  menuHolder.classList.add("menu");

  menuHolder.innerHTML = `
  <h1 class="menu-header">Antipasti</h1>
  <div class="menu-div-holder">
    <div class="menu-div">
      <h1 class="menu-text">Bruschetta</h1>
      <img class="menu-image" src="${
        require("./images/Bruschetta.jpg").default
      }">
      </div>
    <div class="menu-div">
      <h1 class="menu-text">Caprese Salad</h1>
      <img class="menu-image" src="${
        require("./images/Caprese-Salad.jpg").default
      }">
    </div>
  </div>
  <h1 class="menu-header">Primi Piatti</h1>
  <div class="menu-div-holder">
    <div class="menu-div">
      <h1 class="menu-text">Spaghetti alla Carbonara</h1>
      <img class="menu-image" src="${
        require("./images/Spaghetti-alla-Carbonara.jpg").default
      }">
    </div>
    <div class="menu-div">
      <h1 class="menu-text">Linguine alle Vongole</h1>
      <img class="menu-image" src="${
        require("./images/tasty-appetizing-fresh-homemade-clams-alle-vongole-seafood-pasta-with-garlic-white-wine-plate-closeup.jpg")
          .default
      }">
    </div>
  </div>
  <h1 class="menu-header">Dolci</h1>
  <div class="menu-div-holder">
    <div class="menu-div">
      <h1 class="menu-text">Tiramisù</h1>  
      <img class="menu-image" src="${
        require("./images/Tiramisù.jpg").default
      }"> 
    </div>
    <div class="menu-div">
      <h1 class="menu-text">Gelato</h1>
      <img class="menu-image" src="${
        require("./images/Gelato.jpg").default
      }">    
    </div>
  </div>
  `;

  contentHolder.appendChild(menuHolder);
}

export default menu;
