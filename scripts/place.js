const getDate = new Date();
const currentYear = getDate.getFullYear();
const getlasModification = new Date(document.lastModified);
const getLastModified = getlasModification.toLocaleString();

const year = document.querySelector("#year");
const lasModification = document.querySelector("#LastModification");

year.textContent = `${currentYear} Prince Godwyll Accra Ghana.`;
lasModification.textContent = getLastModified;

const tempCelcius = 20;
const tempFarend = 68;
const windSpeed = 5;
const windSpeedMph = 3.11;
const getwindChill = document.getElementById("windChill");

const calculateWindChill = () => {
  let windChill;
  if (tempCelcius <= 10 && windSpeed > 5) {
    windChill =
      (13.12 +
      0.6215 * tempCelcius -
      Math.pow(11.37 * windSpeed, 0.16) +
      Math.pow(0.3965 * tempCelcius * windSpeed, 0.16)).toFixed(4);
      
    getwindChill.textContent = `Windchill: ${windChill} °C`;
  }
  
  else if (tempFarend <= 50 && windSpeedMph > 3) {
    windChill =
      (13.12 +
      0.6215 * tempFarend -
      Math.pow(11.37 * windSpeedMph, 0.16) +
      Math.pow(0.3965 * tempFarend * windSpeedMph, 0.16)).toFixed(4);
      Math.round(windChill, 4)
    getwindChill.textContent = `Windchill: ${windChill} °F`;
  } 
  
  else {
    getwindChill.textContent = "Windchill: " + "N/A";
  }
};

window.onload = calculateWindChill;
