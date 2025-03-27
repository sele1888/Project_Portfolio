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
    
    // addational by me
    document.addEventListener('DOMContentLoaded', () => {
        // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
        const apiKey = 'fc8368dec4a27f5004fe2d8244fc0d9e';
        const lat = 9.03;  // Latitude for Addis Ababa
        const lon = 38.74; // Longitude for Addis Ababa
        const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=${apiKey}`;
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Update current weather
                const current = data.current;
                const temp = Math.round(current.temp);
                const description = current.weather[0].description;
                const uvIndex = current.uvi;
    
                document.querySelector('.current-weather h1').textContent = `${temp}°C`;
                document.querySelector('.current-weather p:nth-child(2)').textContent = description;
    
                let uvWarning = '';
                if (uvIndex >= 8) {
                    uvWarning = '<span style="color: orange;">Very high UV.</span> Minimize sun exposure';
                } else if (uvIndex >= 6) {
                    uvWarning = '<span style="color: yellow;">High UV.</span> Take precautions';
                } else {
                    uvWarning = 'Low UV.';
                }
                document.querySelector('.current-weather p:nth-child(3)').innerHTML = uvWarning;
    
                // Update hourly forecast
                const hourly = data.hourly.slice(0, 5);
                const hourlyContainer = document.querySelector('.hourly-forecast');
                hourlyContainer.innerHTML = ''; // Clear static content
    
                hourly.forEach(hour => {
                    const time = new Date((hour.dt + data.timezone_offset) * 1000);
                    const hour12 = time.getHours() % 12 || 12;
                    const ampm = time.getHours() >= 12 ? 'PM' : 'AM';
                    const hourStr = `${hour12} ${ampm}`;
                    const temp = Math.round(hour.temp);
                    const icon = getWeatherIcon(hour.weather[0].icon);
                    const pop = Math.round(hour.pop * 100) + '%';
    
                    const div = document.createElement('div');
                    div.innerHTML = `
                        <p>${hourStr}</p>
                        <p>${temp}°C</p>
                        <p>${icon}</p>
                        <p>${pop}</p>
                    `;
                    hourlyContainer.appendChild(div);
                });
    
                // Create and update daily forecast
                const daily = data.daily.slice(0, 5); // Show 5 days
                const dailyContainer = document.createElement('div');
                dailyContainer.className = 'daily-forecast';
                dailyContainer.style.display = 'none'; // Hidden by default
                hourlyContainer.parentNode.insertBefore(dailyContainer, hourlyContainer.nextSibling);
    
                daily.forEach(day => {
                    const date = new Date((day.dt + data.timezone_offset) * 1000);
                    const dayStr = date.toLocaleDateString('en-US', { weekday: 'short' });
                    const tempMax = Math.round(day.temp.max);
                    const tempMin = Math.round(day.temp.min);
                    const icon = getWeatherIcon(day.weather[0].icon);
    
                    const div = document.createElement('div');
                    div.innerHTML = `
                        <p>${dayStr}</p>
                        <p>${tempMax}°C / ${tempMin}°C</p>
                        <p>${icon}</p>
                    `;
                    dailyContainer.appendChild(div);
                });
    
                // Tab switching
                const tabs = document.querySelector('.tabs');
                tabs.addEventListener('click', (e) => {
                    if (e.target.tagName === 'SPAN') {
                        document.querySelector('.tabs span.active').classList.remove('active');
                        e.target.classList.add('active');
                        if (e.target.textContent === 'Hourly') {
                            hourlyContainer.style.display = 'grid';
                            dailyContainer.style.display = 'none';
                        } else { // Daily
                            hourlyContainer.style.display = 'none';
                            dailyContainer.style.display = 'grid';
                        }
                    }
                });
            })
            .catch(error => console.error('Error fetching weather data:', error));
    
        // Function to map OpenWeatherMap icon codes to emojis
        function getWeatherIcon(iconCode) {
            const iconMap = {
                '01d': '☀️', '01n': '🌙', '02d': '⛅', '02n': '☁️🌙', '03d': '☁️', '03n': '☁️',
                '04d': '☁️', '04n': '☁️', '09d': '🌧️', '09n': '🌧️', '10d': '🌦️', '10n': '🌧️',
                '11d': '⛈️', '11n': '⛈️', '13d': '❄️', '13n': '❄️', '50d': '🌫️', '50n': '🌫️'
            };
            return iconMap[iconCode] || '🌈';
        }
    });
