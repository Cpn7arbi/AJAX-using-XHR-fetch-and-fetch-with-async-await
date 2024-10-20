const apiKey = '1f40bc74b1914a8f904234743241910'; 
const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('city');
const highestTempElement = document.getElementById('highestTemp');
const lowestTempElement = document.getElementById('lowestTemp');
const windSpeedElement = document.getElementById('windSpeed');

searchButton.addEventListener('click', () => fetchWeatherData(cityInput));

async function fetchWeatherData(cityInput) {
    const city = cityInput.value;

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const weatherData = await response.json(); 
        displayWeatherInfo(weatherData);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeatherInfo(weatherData) {
    const current = weatherData.current;
    highestTempElement.textContent = `High: ${current.temp_c} °C`;
    lowestTempElement.textContent = `Low: ${current.temp_c} °C`; 
    windSpeedElement.textContent = `Wind Speed: ${current.wind_kph} kph`;
}
