const cityInput = document.getElementById('cityInput');
        const searchButton = document.getElementById('searchButton');
        const cityName = document.getElementById('cityName');
        const temperature = document.getElementById('temperature');
        const condition = document.getElementById('condition');
        const forecast = document.getElementById('forecast');
        const popularCities = document.querySelectorAll('.popular-cities button'); 
        
       ns

        const apiKey = "a95365bcf7208c5f0284d8bb15d65f1b"; 

        searchButton.addEventListener('click', () => {
            const city = cityInput.value;
            getWeather(city);
        });

        popularCities.forEach(cityButton => {
            cityButton.addEventListener('click', () => {
                const city = cityButton.dataset.city; // Get city from data attribute
                cityInput.value = city; // Set input field
                getWeather(city);
            });
        });

        async function getWeather(city) {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
                const weatherData = await response.json();

                cityName.textContent = weatherData.name;
                temperature.textContent = `Temperature: ${weatherData.main.temp}°C`;
                condition.textContent = `Condition: ${weatherData.weather[0].description}`;
                getForecast(city);

            } catch (error) {
                console.error('Error fetching weather data:', error);
                cityName.textContent = "City not found";
                temperature.textContent = "";
                condition.textContent = "";
                forecast.innerHTML = "";
            }
        }

        async function getForecast(city) {
          try {
            const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
            const forecastData = await forecastResponse.json();

            forecast.innerHTML = "";

            for (let i = 0; i < 5; i++) {
              const forecastItem = forecastData.list[i * 8];

              const forecastDiv = document.createElement('div');
              forecastDiv.classList.add('forecast-item');
              forecastDiv.innerHTML = `
                <p>${new Date(forecastItem.dt * 1000).toLocaleDateString()}</p>
                <p>${forecastItem.main.temp}°C</p>
                <p>${forecastItem.weather[0].description}</p>
              `;
              forecast.appendChild(forecastDiv);
            }

          } catch (error) {
            console.error('Error fetching forecast data:', error);
          }
        }
    