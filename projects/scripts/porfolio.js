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


// add hamburger for responsive nav bar
const getHamburger = document.querySelector('#menu');
const getNavigation = document.querySelector('.navigation');
getHamburger.addEventListener('click', ()=>{
  getHamburger.classList.toggle('open');
  getNavigation.classList.toggle('open');
});




// function to add scroll to section
//access all links in the header
const navLinks = document.querySelectorAll('nav a');
//loop thorugh all the links to add the smooth scrooll porperty to it
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(link.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});



//add localstorage to save the number of times user clickes on the the download resume button
downloadButton = document.querySelector('#download');

  let downloadCount = Number(window.localStorage.getItem('DownloadCount')) || 0;
  downloadButton.addEventListener('click', () =>{
    downloadCount++;

    localStorage.setItem('DownloadCount', downloadCount);
    console.log(`you have downloaded the resume ${downloadCount} times`);

    if(downloadCount >= 5) {
      downloadButton.disabled = true;
      console.log("Download limit reached");
    }
  });


//assign resume file to be downloaded 
const resumeFile = 'resume.pdf';
downloadButton.addEventListener('click', ()=>{
  const link =document.createElement('a');
  if(resumeFile){
    link.href = resumeFile;
    link.download = 'Princes resume';
    link.click();
    console.log('File downloaded successfully');
  }
});