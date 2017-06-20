var axios = require('axios');
const BLOG_URL ='https://jsonplaceholder.typicode.com/posts?userId=1';
const COMMENT_URL ='https://jsonplaceholder.typicode.com/comments';
const POST_URL = 'https://jsonplaceholder.typicode.com/posts/';
const POST_COMMENT = 'https://jsonplaceholder.typicode.com/posts/1/comments';
const DELETE_BLOG_URL = 'http://jsonplaceholder.typicode.com/posts/1';
//var OPEN_WEATHER_MAP_URL ="http://api.openweathermap.org/data/2.5/weather?&appid=6b0b4b0b8885127f39ad5340c4ae021a&units=imperial";
module.exports = {
  getBlog()
  {
var requestUrl = `${BLOG_URL}`;

return axios.get(requestUrl).then(function(data)
{
console.log(data);
return data.data;
}, function(res)
{
  throw new Error(res.data);
});
  },

  getComments(postId)
  {
var requestUrl = `${COMMENT_URL}?postId=${postId}`;
return axios.get(requestUrl).then(function(data)
{
console.log(data);
return data.data;
}, function(res)
{
  throw new Error(res.data);
});
  },

  pushBlogs(postData)
  {
var requestUrl = `${POST_URL}`;
alert(postData.body);
return axios.post(requestUrl,postData).then(function(data)
{
console.log(data);
return data;
}, function(res)
{
 throw new Error(res.data);
});
  },

pushComments(postData)
  {
var requestUrl = `${POST_COMMENT}`;

 return axios.post(requestUrl,postData).then(function(data)
{
console.log(data);
return data;
}, function(res)
{
  throw new Error(res.data);
});
  },

  deleteBlog(blog_id)
  {
var requestUrl = `${DELETE_BLOG_URL}`;

return axios.delete(requestUrl).then(function(data)
{
  debugger;
console.log(data);
return data;
}, function(res)
{
  throw new Error(res.data);
});
  }
}
