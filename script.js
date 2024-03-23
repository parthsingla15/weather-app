









let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";


const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
 
  const url = `https://open-weather13.p.rapidapi.com/city/${city}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1e39b5f4ebmshe57656f6ef9b99ap1c693ejsnae71be31f27e',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};


return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`,options)
.then(response=>response.json())
.then(data=> data)
.catch(err=>console.error(err));

}


const searchCity = async () => {
  const city = document.getElementById('city-input').value;
 
  console.log(city)
  const data= await getWeatherData(city)
  showWeatherData(data)

}


const showWeatherData = (weatherData) => {
  console.log(weatherData)
  console.log(weatherdata.main.temp)
  
  
  
  document.getElementById('temp').innerText=(weatherdata.main.temp) 
  document.getElementById('city-name').innerText=(weatherdata.name) 
  document.getElementById('weather-type').innerText=(weatherdata.weather[0].main) 
  document.getElementById('min-temp').innerText=(weatherdata.main.temp_min) 
  document.getElementById('max-temp').innerText=(weatherdata.main.temp_max)  
}
