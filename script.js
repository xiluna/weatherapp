$('.button').click(function() {
  var cityName = $('.userInput').val();
  var cityNameAPI = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&appid=87cab200a3d334098180d9486e36b069'
  console.log(cityNameAPI);
  
  fetch(cityNameAPI)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data)
    
    
    if (data.weather[0].main === 'Clouds') {
      $('.clothing').append('<p>Long Sleeve, Light Jacket</p>');
    } else if (data.weather[0].main === 'Clear') {
      $().append('Sunglasses');
    } else if (data.weather[0].main === 'Snow') {
      $().append('Snow Jacket, Snow Boots');
    } else if (data.weather[0].main === 'Thunderstorm'){
      $().append('Stay Inside');
    } else if (data.weather[0].main === 'Drizzle') {
      $().append('Waterproof Jacket');
    } else if (data.weather[0].main === 'Rain') {
      $().append('Umbrella');
    }
  });
});