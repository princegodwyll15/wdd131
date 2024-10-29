const mydetails = [
    {
        name:"Prince Godwyll",
        email:"godwyllprince@gmail.com",
        phone:"0595167828"
    }
];


//add hamburger for responsive nav bar
function createHamburger(){
const getHamburger = document.querySelector('#menu');
const getNavigation = document.querySelector('.navigation');

getHamburger.addEventListener('click', ()=>{
  getHamburger.classList.toggle('open');
  getNavigation.classList.toggle('open');
})
};
window.onload(createHamburger());



// function to add scroll to section
const addscrollToSection = ()=>{
//access all links in the header
const navLinks = document.querySelectorAll('nav a');
//loop thorugh all the links to add the smooth scrooll porperty to it
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(link.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
})
};
window.onload(addscrollToSection());


// populate the footer element
const getYear = document.querySelector('#year');
const getLastModifeid = document.querySelector('#lastModification');

const date = new Date();
const year = date.getFullYear();
const lastModifed = new Date(document.lastModified);
const convertToString = lastModifed.toLocaleDateString();

getYear.textContent = `© ${year} Prince Godwyll Accra, Ghana.`;
getLastModifeid.textContent=`Last Modified: ${convertToString}`;

