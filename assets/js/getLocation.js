let x = document.getElementById("demo");

function success(position) {
  let coordinates = position.coords;
  const url = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude='+coordinates.latitude+'&longitude='+ coordinates.longitude+'&localityLanguage=en';

  $.get(url, function(data, status){
    console.log("\nStatus: " + status);
   x.innerHTML = `<h4> Your Current Positon is:  </h4><br> 
<h4>  Latitude : <span>   ${coordinates.latitude}</span> </h4> <br> 
<h4> Longitude: <span>   ${coordinates.longitude}  </span> </h4> <br> 
<h4> More or less <span>  ${coordinates.accuracy} </span> meters. </h4> <br>
<h4> You are Actually in  <span>  ${data.locality} </span> 
  `;
  });
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error, options);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}