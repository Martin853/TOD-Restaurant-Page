const contentHolder = document.querySelector("#content-holder");

function contact() {
  contentHolder.innerHTML = `
  <h1 style="font-size: 32px">Phone Number</h1>
  <p style="font-size:24px; color: white">000-000-000</p>
  
  <h1 style="font-size: 32px">Email</h1>
  <p style="font-size:24px; color: white">email@email.email</p>
  `;
}

export default contact;
