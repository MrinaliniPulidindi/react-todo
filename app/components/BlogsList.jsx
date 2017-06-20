var React=require('react');
var BlogComments = require('BlogComments');
var OpenBlog = require('OpenBlog');
var AddBlog = require('AddBlog');
var uuid = require('uuid');

var BlogsList = React.createClass({

  getInitialState: function(){
      return { blogs :[{body:'defaultBody'}]
    };
    },

  // get blog info
  loadBlogData: function() {

    var that =this;

      OpenBlog.getBlog().then(function(blogsData)
      {
        console.log(blogsData);
      //  that.setState({blogs: blogsData});
      that.setState(
        {blogs: blogsData}
      );
          }, function(res)
          {
          });
    },

  componentDidMount: function() {
    this.loadBlogData();
  },
  handleAddBlog: function (text) {

    var that = this;
   var postData = {postId:'',id:'',name:'',email:'',body:''};
   postData.userId = 1;
   postData.id = 11;
   postData.title = 'abc@xyz.com';
   postData.body = text;

   OpenBlog.pushBlogs(postData).then(function(response)
          {
            console.log(response);
            that.setState({
              blogs: [
                ...that.state.blogs,
                {
                  body: text+':status:'+response.status
                }
              ]
            });
              }, function(res)
              {
              });
 },
 handleDeleteBlog: function () {

   var that = this;

  OpenBlog.deleteBlog().then(function(response)
         {
           console.log(response);
           that.setState({
             blogs: [
               ...that.state.blogs,
               {
                 body: 'deletion status:'+response.status
               }
             ]
           });
             }, function(res)
             {
             });
 },

  render: function() {
    var that = this;
  console.log(this.state.blogs);
    return (
             <div className="row">
               <div className="column small-centered small-11 medium-6 large-5">
                 <div className="container">
                   {/* <h1 className="page-title">Blogs</h1> */}
                   {

                   this.state.blogs.map(function(blog) {
                     return <BlogComments key={blog.id} {...blog} onDeleteTodo={that.handleDeleteBlog}/>
                   })
                 }
                    <AddBlog onAddTodo={this.handleAddBlog} buttonText='Add Blog'/>
</div>
</div>
</div>)
  }
});

module.exports = BlogsList;
