$('.button').click(function() {
  var cityName = $('.userInput').val();
  var cityNameAPI = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&units=imperial&appid=87cab200a3d334098180d9486e36b069'
  console.log(cityNameAPI);
  
  fetch(cityNameAPI)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data)
    if (data.main){
      $('.degrees').empty();
        $('.desc').empty();
      $('.degrees').append(data.main.temp + '°F');
       $('.desc').append(data.weather[0].description);
    }
    
    if (data.weather[0].main === 'Clouds') {
      $('.wear').empty();
      $('.wear').append('<p>Long Sleeve, Light Jacket</p>');
    } else if (data.weather[0].main === 'Clear') {
      $('.wear').empty();
      $('.wear').append('Sunglasses');
    } else if (data.weather[0].main === 'Snow') {
      $('.wear').empty();
      $('.wear').append('Snow Jacket, Snow Boots');
    } else if (data.weather[0].main === 'Thunderstorm'){
      $('.wear').empty();
      $('.wear').append('Stay Inside');
    } else if (data.weather[0].main === 'Drizzle') {
      $('.wear').empty();
      $('.wear').append('Waterproof Jacket');
    } else if (data.weather[0].main === 'Rain') {
      $('.wear').empty();
      $('.wear').append('Umbrella');
    }
  });
});