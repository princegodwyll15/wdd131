const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

ModifiedElement = document.getElementById("lastModification");
const getLastModified = new Date(document.lastModified);
actDate = getLastModified.toLocaleString();

ModifiedElement.textContent = `Last updated: ${actDate}`;
