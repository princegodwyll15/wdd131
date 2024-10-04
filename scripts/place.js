const getDate = new Date();
const currentYear = getDate.getFullYear();
const getlasModification = new Date(document.lastModified);
const getLastModified = getlasModification.toLocaleString();

const year = document.querySelector("#year");
const lasModification = document.querySelector("#LastModification");

year.textContent = `${currentYear} Prince Godwyll Accra Ghana.`;
lasModification.textContent = getLastModified;
