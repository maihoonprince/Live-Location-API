const button = document.getElementById("get-location-button");
const loc = document.getElementById("location");
const lat = document.getElementById("lat");
const log = document.getElementById("long");

async function getData(lat, long) {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=c77c4419654c461d97185543232309&q=${lat},${long}&aqi=yes`);
  return await response.json();
}

async function gotLocation(position) {
  try {
    const result = await getData(position.coords.latitude, position.coords.longitude);

    console.log(result);

    loc.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
    lat.innerText = `${result.location.lat}`;
    log.innerText = `${result.location.lon}`; // Corrected from 'loc' to 'log'
  } catch (error) {
    console.error('Error getting weather data:', error);
  }
}

function failedToGet() {
  console.log('There was some issue');
}

button.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
});
