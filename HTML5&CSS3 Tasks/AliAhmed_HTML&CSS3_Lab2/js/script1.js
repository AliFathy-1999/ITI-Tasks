//Buttons
let getLocInfo = document.getElementById("getLocInfo");
let getLocation = document.getElementById("getLocation");
//Text
let locationStatus = document.getElementById("locationStatus");
let locationPoints= document.getElementById("locationPoints");
let latitude="";
let longitude="";
// let icon= document.getElementById("icon");
function viewPosition(yourPosition) {
    locationStatus.innerHTML = "Location getted Successfully";
    locationStatus.style.color="green";
    locationPoints.innerHTML =`Latitude is ${yourPosition.coords.latitude} <br> longitude is ${yourPosition.coords.longitude}`; 
    latitude=yourPosition.coords.latitude;
    longitude=yourPosition.coords.longitude;
    getLocation.style.display="inline"
  }  
function viewError(Geoerror) {
    locationStatus.style.color="red";
    if(Geoerror.PERMISSION_DENIED){
        locationStatus.innerHTML = "Permission denied, please try again!";
    }else if(Geoerror.TIMEOUT){
        locationStatus.innerHTML = "Time out request, please try again!";
    }else if(Geoerror.POSITION_UNAVAILABLE){
        locationStatus.innerHTML = "Error in detecting your location, please try again!";
    }else{
        locationStatus.innerHTML = "Unkown error, please try again!";
    }
}
getLocInfo.addEventListener("click",()=> {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(viewPosition,viewError);
    } else {
      locationStatus.innerHTML = "Your browser does not support Geolocation property";
    }
})
  
getLocation.addEventListener("click",()=>{
    let url=`https://www.google.com.eg/maps?q=${latitude},${longitude}`
    open(url,"_blank");
})
