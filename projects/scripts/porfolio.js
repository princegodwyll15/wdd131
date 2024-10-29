const mydetails = [
    {
        name:"Prince Godwyll",
        email:"godwyllprince@gmail.com",
        phone:"0595167828"
    }
];


//access all links in the header
const navLinks = document.querySelectorAll('nav a');


//loop thorugh all the links to add the smooth scrooll porperty yo it
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(link.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});





// populate the footer element
const getYear = document.querySelector('#year');
const getLastModifeid = document.querySelector('#lastModification');

const date = new Date();
const year = date.getFullYear();
const lastModifed = new Date(document.lastModified);
const convertToString = lastModifed.toLocaleDateString();

getYear.textContent = `© ${year} Prince Godwyll Accra, Ghana.`;
getLastModifeid.textContent=`Last Modified: ${convertToString}`;

