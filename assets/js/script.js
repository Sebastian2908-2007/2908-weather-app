function getWeather () {
   
  var cityWeather = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=c5c96daed38db003f5a5228c5b83c909";
  fetch(cityWeather);
  console.log(cityWeather);
  
  
};
getWeather();