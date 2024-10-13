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
    dedicated: "  11 January 2004",
    area: 17500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg",
  },
  {
    templeName: "Detroit Michigan Temple",
    location: "Eastern Michigan, USA",
    dedicated: "   10 October 1998",
    area: 10700,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/detroit-michigan-temple/detroit-michigan-temple-45743-main.jpg",
  },

  // Add more temple objects here...
];

//create a container for the elements to be created
const container = document.createElement("div");
container.classList.add("container");

// Iterate through temple data
temples.forEach((templeData) => {
  //create a wrappeer the temple elements
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  //create elements for templeName key in the array object data
  const temName = document.createElement("h2");
  temName.classList.add("templeName");
  temName.textContent = templeData.templeName;

  //create elements for other temples key in the array object data
  const othertemData = document.createElement("p");
  othertemData.classList.add("tempdata");
  othertemData.innerHTML = `Temple Location: ${templeData.location} <br>
                            Dedication:${templeData.dedicated} <br>
                            Land Size: ${templeData.area}`;

  //create an img element to append temple images to it
  const createImg = document.createElement("img");
  createImg.classList.add("img");
  createImg.src = templeData.imageUrl;
  createImg.alt = templeData.templeName;
  createImg.loading = "lazy";

  wrapper.appendChild(temName);
  wrapper.appendChild(othertemData);
  wrapper.appendChild(createImg);

  container.appendChild(wrapper);
});
document.body.appendChild(container);

// Create footer element
const footerContent = () => {
  const currentYear = new Date().getFullYear();
  const footerElement = document.createElement("footer");
  footerElement.classList.add("footer");

  const footerParagraph = document.createElement("p");
  footerParagraph.classList.add("footer-p");

  const getLastModified = new Date(document.lastModified);
  const actDate = getLastModified.toLocaleString();

  footerParagraph.innerHTML = `Last Modified: ${actDate} <br>
   ${currentYear} Prince Godwyll Accra Ghana`;
  footerElement.appendChild(footerParagraph);

  // Append footer to the body
  document.body.appendChild(footerElement);
};

// Call footerContent on page load
document.addEventListener("DOMContentLoaded", footerContent);

//hamburger on small screens
const getNavigation = document.querySelector(".navigation");
const openMenu = document.querySelector("#menu");

openMenu.addEventListener("click", () => {
  getNavigation.classList.toggle("open");
  openMenu.classList.toggle("open");
});




//filter elements for links
const oldTemples = temples.filter((templeData) => {
  const dedicatedYear = new Date(templeData.dedicated).getFullYear();
  return dedicatedYear < 1900;
});

oldTemples.forEach((templeData) => {
  //create a container for filtered temple data
  const filteredContainer = document.createElement("div");
  filteredContainer.classList.add("filteredContainer");

  //wrapper to contain all img cards of temples
  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  //create elements for templeName key in the array object data
  const temName = document.createElement("h2");
  temName.classList.add("templeName");
  temName.textContent = templeData.templeName;

  const othertemData = document.createElement("p");
  othertemData.classList.add("tempdata");
  othertemData.innerHTML = `Temple Location: ${templeData.location} <br>
                            Dedication:${templeData.dedicated} <br>
                            Land Size: ${templeData.area}`;

  //create an img element to append temple images to it
  const createImg = document.createElement("img");
  createImg.classList.add("img");
  createImg.src = templeData.imageUrl;
  createImg.alt = templeData.templeName;
  createImg.loading = "lazy";

  wrapper.appendChild(temName);
  wrapper.appendChild(othertemData);
  wrapper.appendChild(createImg);
  filteredContainer.appendChild(wrapper);
});

document.body.appendChild(filteredContainer);


