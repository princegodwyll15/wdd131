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


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },

  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004, Janaury, 11",
    area: 17500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg",
  },
  {
    templeName: "Detroit Michigan Temple",
    location: "Eastern Michigan, USA",
    dedicated: " 1998, October, 10",
    area: 10700,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/detroit-michigan-temple/detroit-michigan-temple-45743-main.jpg",
  },
];

// Create container
const container = document.createElement("div");
container.classList.add("container");

// Function to create temple elements
function createTempleElement(templeData) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const templeName = document.createElement("h2");
  templeName.classList.add("templeName");
  templeName.textContent = templeData.templeName;

  const templeDetails = document.createElement("p");
  templeDetails.classList.add("tempdata");
  templeDetails.innerHTML = `
    Temple Location: ${templeData.location} <br>
    Dedication: ${templeData.dedicated} <br>
    Land Size: ${templeData.area}
  `;

  const templeImage = document.createElement("img");
  templeImage.classList.add("img");
  templeImage.style.height = "300px";
  templeImage.src = templeData.imageUrl;
  templeImage.alt = templeData.templeName;
  templeImage.loading = "lazy";

  wrapper.appendChild(templeName);
  wrapper.appendChild(templeDetails);
  wrapper.appendChild(templeImage);
  return wrapper;
}

// Function to filter temples
function filterTemples(filterType) {
  const filteredTemples = temples.filter((templeData) => {
    switch (filterType) {
      case "old":
        return parseInt(templeData.dedicated.split(",")[0].trim()) <= 1900;
      case "new":
        return parseInt(templeData.dedicated.split(",")[0].trim()) > 2000;
      case "large":
        return templeData.area > 90000;
      case "small":
        return templeData.area < 10000;
      default:
        return true; // Home filter
    }
  });

  return filteredTemples;
}

// Function to update container
function updateContainer(filterType) {
  container.innerHTML = "";
  const filteredTemples = filterTemples(filterType);
  filteredTemples.forEach((templeData) => {
    const templeHead = document.querySelector('#templeHead');
    templeHead.textContent = `temple  ${filterType}`;
    
    container.appendChild(createTempleElement(templeData));
  });
}

// Initialize container
temples.forEach((templeData) => {
  container.appendChild(createTempleElement(templeData));
});

// Append container to main element
const main = document.querySelector("main");
main.appendChild(container);

// Add event listeners for filters
document
  .getElementById("old")
  .addEventListener("click", () => updateContainer("old"));
document
  .getElementById("new")
  .addEventListener("click", () => updateContainer("new"));
document
  .getElementById("large")
  .addEventListener("click", () => updateContainer("large"));
document
  .getElementById("small")
  .addEventListener("click", () => updateContainer("small"));
document
  .getElementById("home")
  .addEventListener("click", () => updateContainer());

