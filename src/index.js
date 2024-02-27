

document.addEventListener('DOMContentLoaded', async () => {
    
    
    
    
    const searchForm = document.getElementById('search-form')
    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault()
        const city = document.getElementById('search-input').value;
        const weather = await getWeather(city)
    })
});

async function getWeather(city) {
    const apiKey = '77baafb005ec4155a13124049242702'
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    
    const cityName = document.getElementById('city-name');
    const condition = document.getElementById('weather-description');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind-speed');
    const localTime = document.getElementById('local-time');
    
    

    const response = await fetch(url)
    const data = await response.json()
    // catch errors
    if (data.error) {
        alert(data.error.message)
        return
    } else {
    cityName.textContent = `City Name: ${data.location.name}`
    condition.textContent = `Weather Condition: ${data.current.condition.text}`
    temperature.textContent = `Current temp: ${data.current.temp_c} in Celsius`
    humidity.textContent = `Humidity: ${data.current.humidity}`
    wind.textContent = `Wind Speed (kph): ${data.current.wind_kph}`
    localTime.textContent = `Local Time: ${data.location.localtime}`
    }
    
}