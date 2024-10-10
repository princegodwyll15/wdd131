//get html element for modification
const displayYear = document.querySelector('#year');
const lastModification = document.querySelector('#lastModification');

//get the last document modification date and time
let lastModified = new Date(document.lastModified);
lastModified = lastModified.toLocaleDateString();


const currentDate = new Date();
const getFullYear = currentDate.getFullYear();

//display current year in the footer section
displayYear.textContent = `${getFullYear} Prince Godwyll Accra, Ghana`;

//display the last modification date
lastModification.textContent = `Last Modification Date: ${lastModified}`;