//api Key and url
const apiKey = "ff0c2d8c3eaa51acf4ab760404a14598";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
// accessing the input data, serach btn and icon
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");

// fetching data of the city via openweather
async function checkWeather(city){
    const response = await fetch(apiUrl+`&q=${city}`+`&appid=${apiKey}`);
    //cond to cheack if city name is entered correctly or not
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();
        //accessing all the necessary data to be shown
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
    //changing image according to weather condition
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "/images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "/images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "/images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "/images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "/images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "/images/snow.png";
    }
        // hiding error msg and displaying weather details
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
}
checkWeather();
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
