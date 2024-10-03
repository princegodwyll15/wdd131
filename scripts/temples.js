// last modification date
const currentYear = new Date().getFullYear();
const footerMsg = document.querySelector("#year");

footerMsg.textContent = `${currentYear} Prince Godwyll Accra Ghana.`;
ModifiedElement = document.getElementById("lastModification");
const getLastModified = new Date(document.lastModified);
actDate = getLastModified.toLocaleString();

ModifiedElement.textContent = `Last updated: ${actDate}`;

//hamburger on small screens
const getNavigation = document.querySelector(".navigation");
const openMenu = document.querySelector("#menu");

openMenu.addEventListener("click", () => {
  getNavigation.classList.toggle("open");
  openMenu.classList.toggle("open");
});
