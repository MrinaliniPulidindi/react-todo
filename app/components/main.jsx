var React = require('react');
var Blogs = require('Blogs');
var OpenBlog = require('OpenBlog');

var axios = require('axios');
const BLOG_URL ='http://jsonplaceholder.typicode.com/posts/1';

var Main= React.createClass(
  {
    getInitialState:function()
{

  return{
blog :'abc'
  }
},
componentDidMount: function()
    {
      var requestUrl = `${BLOG_URL}`;
      var _this = this;

      alert("heelo");
    axios.get(requestUrl).then(function(data)
         {
           debugger;
           alert(data.data.body);
        
           _this.setState()
   {
 blog: data.data.body
   };
         },
       function(data)
       { _this.setState()
  {
blog: data
  };}
     );
   },
      render: function()
    {

//var {blog} = this.state;
   alert("return");

//this.endPointCall();
//var stringData = JSON.stringify(stringData);
return(<Blogs blog={this.state.blog} />);
    }
  }
);

module.exports = Main;
