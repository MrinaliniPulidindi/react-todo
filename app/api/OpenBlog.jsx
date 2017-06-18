var axios = require('axios');
const BLOG_URL ='http://jsonplaceholder.typicode.com/posts/1';

//var OPEN_WEATHER_MAP_URL ="http://api.openweathermap.org/data/2.5/weather?&appid=6b0b4b0b8885127f39ad5340c4ae021a&units=imperial";
module.exports = {
  getBlog()
  {

  //  var encodedLocation = encodeURIComponent(location);
//var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
var requestUrl = `${BLOG_URL}`;
//return $.ajax({
//  url: root + '/posts/1',
//  method: 'GET'
//}).then(function(data) {
  //return data;
//});

return axios.get(requestUrl).then(function(data)
{
console.log(data);
return data.data.body;
}, function(res)
{
  throw new Error(res.data);
});
  }
}
