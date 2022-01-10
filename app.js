//Intialize Storage Object

const storage = new Storage();
//Get stored location
const weatherLocation = storage.getLocationData();
//Intialize Weather Object

const weather = new Weather(weatherLocation.city);

//Intialize UI Object

const ui = new UI();


// Get weather on DOM load
document.addEventListener('DOMContentLoaded',getWeather);

//Change Location event
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    const city = document.getElementById('city').value; 
    
    weather.changeLocation(city);

    //Set location in LocalStorage
    storage.setLocationData(city);

    getWeather();
    $('#locModal').modal('hide');
 
});
function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}