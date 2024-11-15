const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weatherIcon")

async function checkWeather(){
    const city = searchBox.value;  // Get the city dynamically here//
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=WJ99Q7KMAHA6P9HEF92XGWR5P&contentType=json`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.address;
        document.querySelector(".temp").innerHTML = Math.round(data.currentConditions.temp) + " °C";
        document.querySelector(".humidity").innerHTML = data.currentConditions.humidity + " %";
        document.querySelector(".wind").innerHTML = data.currentConditions.windspeed + " km/h"; 
        
        if(data.currentConditions.conditions == "partially cloudy"){
         WeatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYboP7whEFv6OqQLz9OOMeIYrGazEPj9O67g&s"
        }
        else if (data.currentConditions.conditions == "Clear"){
            WeatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlWcQ4pe6xtwq7r8DD_SuAFHpcWPQAT6sMtw&s"
        }
        else if (data.currentConditions.conditions == "Rain"){
            WeatherIcon.src = "https://cdn-icons-png.flaticon.com/512/5497/5497354.png"
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather();
});