class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');

    }

    paint(weather){
        
        this.location.textContent = weather.location.name +"," + weather.location.region;     //city name 
        this.desc.textContent = weather.current.condition.text; //weather condition 
        this.string.textContent = weather.current.temp_c + "°C (" + weather.current.temp_f +"°F )"  ; //weather temperature 
        this.icon.setAttribute('src', weather.current.condition.icon); // weather condition icon
        this.humidity.textContent = `Humidity: ${weather.current.humidity} %`;
        this.feelsLike.textContent = `Feels Like : ${weather.current.feelslike_c} °C (${weather.current.feelslike_f} °F)` ;
        this.dewpoint.textContent = `UV: ${weather.current.uv}`;
        this.wind.textContent = `Wind at ${weather.current.wind_mph} mph from the ${weather.current.wind_dir} gusting at ${weather.current.gust_mph} mph`;
    }
}