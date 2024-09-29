// last modification date
const currentYear = new Date().getFullYear();
ModifiedElement = document.getElementById("lastModification");
const getLastModified = new Date(document.lastModified);
actDate = getLastModified.toLocaleString();

ModifiedElement.textContent = `Last updated: ${actDate}`;
