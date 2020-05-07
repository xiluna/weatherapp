// $().click(function() {
  fetch('api.openweathermap.org/data/2.5/weather?q=Oakland&appid=87cab200a3d334098180d9486e36b069')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data)
  });
// });