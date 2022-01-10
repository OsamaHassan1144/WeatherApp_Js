class Weather{

    constructor(city){
        this.apiKey = 'd7452e432b1a43b6989113710220601';
        this.city = city;
        // this.state = state;

    }

    //Fetch weather from API
    async getWeather(){

        const response = await fetch(` http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);
        
        const responseData = await response.json();

        return responseData;

        // return responseData.current;
    }

    // Change weather location
    changeLocation(city){
        this.city = city;

    }
}