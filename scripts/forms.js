const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

//get the select html element using the dom module
const getSelect = document.querySelector('#select-product');

// get all reqiured variables to populate the footer data
  const newYear = document.querySelector("#year");
  const lastModified = document.querySelector("#lastModification");

  // declare a new date
  const year = new Date();
  const currentYear = year.getFullYear();
  newYear.textContent = `${currentYear} Prince Godwyll Ghana, Accra.`;

  const lastModification =new Date(document.lastModified);
  const actModified = lastModification.toLocaleString();
  lastModified.textContent = `Last Modified: ${actModified}`;

  