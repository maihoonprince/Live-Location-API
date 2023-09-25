const button = document.getElementById("get-location-button");


async function getData(lat, long){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=c77c4419654c461d97185543232309&q=${lat}, ${long}&aqi=yes`);

    return await response.json()
}

async function gotLocation(position) {
    const result = await getData(position.coords.latitude, position.coords.longitude);

    console.log(result);
}

function failedToGet(){
    console.log('There was some issue');
}


button.addEventListener('click', async () => {
    navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
});

