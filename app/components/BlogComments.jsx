var React=require('react');
var OpenBlog = require('OpenBlog');
var AddBlog = require('AddBlog');

var uuid = require('uuid');
var BlogComments = React.createClass({
  getInitialState: function(){
      return { comments :[{body:'defaultBody'}]
    };
    },


loadCommentData : function()
  {
    var that = this;
    OpenBlog.getComments(that.props.id).then(function(commentsData)
           {
             console.log('Comments',commentsData);
            that.setState({comments: commentsData});
               }, function(res)
               {
               });

  },
  componentDidMount: function() {
    this.loadCommentData();
  },

  handleAddComent: function (text) {

    var that = this;
   var postData = {postId:'',id:'',name:'',email:'',body:''};
   postData.postId = that.props.id;
   postData.id = 6;
   postData.name = 'MrinaliniPulidindi';
   postData.email = 'abc@xyz.com';
   postData.body = text;

   OpenBlog.pushComments(postData).then(function(response)
          {
            console.log(response);
            that.setState({
              comments: [
                ...that.state.comments,
                {
                  body: text+':status:'+response.status
                }
              ]
            });
              }, function(res)
              {
              });
 },

 handleSubmit: function(e)
 {

   var that = this;
   e.preventDefault();
     that.props.onDeleteTodo();
 },

  render: function() {

var {id} = this.props;

    return (
      <div>
      <div className="container">
      <h1 className="page-title"  style={{'color':'#556','margin-top':'2.5rem'}}>Blogs</h1>
        <form onSubmit={this.handleSubmit}>
      <div>

       <li>Blogs: {this.props.body}</li>
         <button className="button expanded">Delete</button>
       </div>
       </form>
     </div>
       <div className="container">
      <h4>Comments</h4>
      <ul className="Comments">
        {
        this.state.comments.map(function(comment) {
            return <li key={comment.id}>{comment.body}</li>
          })
        }
          <AddBlog onAddTodo={this.handleAddComent} buttonText='Add Comment' style={{'margin-top':'3rem'}}/>
      </ul>

    </div>
    </div>
    )
  }
});
module.exports = BlogComments;
