const apiKey = 'c4f86ece00bc8aa272652ac9065af12d'; // Replace 'YOUR_API_KEY' with your actual API key --> NOPE !
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const form = document.getElementById('weatherForm');


function showWeatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const lat = document.getElementById('lattitude').value;
    const lon = document.getElementById('longitude').value;
    const apiUrl = city ? 
                    `${baseUrl}?q=${city}&appid=${apiKey}&units=metric` : 
                    `${baseUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;


    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            console.log(apiUrl)
            console.log(data)


            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Coordinates: ${data.coord.lat} / ${data.coord.lon}</p>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
    
    form.reset();

}


form.addEventListener('submit', showWeatherDetails);

