var React=require('react');
var AddComment = require('AddComment');
var {connect} = require('react-redux');
var actions = require('actions');

export var BlogComments = React.createClass({
  componentDidMount: function() {
  this.props.fetchCommentsData(this.props.id);
  },


handleSubmit : function(){
this.props.deleteBlog(this.props.id);
},

  render: function() {

var {id,dispatch} = this.props;
console.log("id:comments",id,'  ',this.props.comments);
var blogs= this.props.body;

    return (
      <div>
      <div className="container">
      <h1 className="page-title"  style={{'color':'#556','marginTop':'2.5rem'}}>Blogs</h1>
        <form onSubmit={this.handleSubmit}>
      <div>
       <li>Blogs: {blogs}</li>
         <button className="button expanded">Delete</button>
       </div>
       </form>
     </div>
       <div className="container">
      <h4>Comments</h4>
      <ul className="Comments">
        {

        this.props.comments.map(function(comment) {
            return <li key={comment.id}>{comment.body}</li>
          })
        }
          <AddComment  buttonText='Add Comment' style={{'marginTop':'3rem'}}/>
      </ul>

    </div>
    </div>
    )
  }
});
const mapStateToProps = (state) => {
    return {
        comments: state.comments,
        blog: state.blog
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCommentsData: (id) => dispatch(actions.loadCommentsData(id)),
deleteBlog: (id) => dispatch(actions.deleteBlog(id))
    };
};
module.exports = connect(mapStateToProps,mapDispatchToProps)(BlogComments);
