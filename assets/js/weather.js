
// Replace with your actual API key

const apiKey = 'fc8368dec4a27f5004fe2d8244fc0d9e'; // Example key—use your own!
const city = 'Addis Ababa'; // Replace with your city

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Conditions: ${data.weather[0].description}</p>
        `;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather').innerHTML = '<p>Unable to load weather data.</p>';
        
    });

   