# Weather App 🌤️

A simple weather application that fetches and displays current weather information for a given city.<br>
Built with HTML, CSS, and JavaScript, this app uses a weather API to retrieve up-to-date weather data.

## Features

- Search for current weather by city name
- Displays temperature, weather conditions, and other details
- Dynamic Weather Icon changing based on weather conditions
- Error handling for invalid inputs or network issues

## Tech Stack

- **HTML5**: Markup structure of the application
- **CSS3**: Styling and layout
- **JavaScript (ES6)**: Functionality and DOM manipulation
- **REST API**: Fetching weather data from an external API

## How to Use

1. Clone this repository:

   ```bash
   git clone https://github.com/SaurabhKuntal110/Unified-Mentor.git

2. Open Weather App folder.

3. Open index.html in your browser to view the app.

4. Enter a city name in the search bar and click "Search" to get the current weather.

## Setup

1. Sign up at OpenWeatherMap to get an API key.

2. Create a .env file in the root directory and add your API key:
```API_KEY=your_openweather_api_key```

3. Ensure you have an API handler in your JavaScript file to fetch the weather data:
```const apiKey = process.env.API_KEY;```

## Code Structure

index.html: Main structure of the app
style.css: Stylesheet for the app's design
script.js: JavaScript file with API calls and event handling

## API Usage

This app uses the OpenWeatherMap API to get current weather data.
Endpoint: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
Method: GET
Response: JSON object containing weather details such as temperature, humidity, and description.

## Future Improvements

Add a 7-day weather forecast
Improve UI with animations
Display weather icons for better user experience
Add location-based weather search using Geolocation API

## License

This project is open for use, modification, and distribution. Feel free to use this code in your own projects or customize it as you like.
