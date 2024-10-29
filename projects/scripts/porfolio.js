const mydetails = [
    {
        name:"Prince Godwyll",
        email:"godwyllprince@gmail.com",
        phone:"0595167828"
    }
];

// populate the footer element
const getYear = document.querySelector('#year');
const getLastModifeid = document.querySelector('#lastModification');

const date = new Date();
const year = date.getFullYear();
const lastModifed = new Date(document.lastModified);
const convertToString = lastModifed.toLocaleDateString();

getYear.textContent = `© ${year} Prince Godwyll Accra, Ghana.`;
getLastModifeid.textContent=`Last Modified: ${convertToString}`;

