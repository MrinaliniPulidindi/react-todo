var React=require('react');
var BlogComments = require('BlogComments');
var {connect} = require('react-redux');
var actions = require('actions');
var AddBlog = require('AddBlog');
export var BlogsList = React.createClass({

  componentDidMount: function() {
  this.props.fetchData();
  },

  render: function() {
    var that = this;
    var {dispatch} = this.props;

    return (
             <div className="row">
               <div className="column small-centered small-11 medium-6 large-5">
                 <div className="container">
                   {/* <h1 className="page-title">Blogs</h1> */}
                   {
                   this.props.blogs.map(function(blog) {
                    //  return <BlogComments key={blog.id} {...blog} onDeleteTodo={that.handleDeleteBlog}/>
            return <BlogComments key={blog.id} {...blog} />
                   })
                 }
                     <AddBlog  buttonText='Add Blog'/>
</div>
</div>
</div>)
  }
});

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(actions.loadBlogData())
    };
};

module.exports = connect(
mapStateToProps,mapDispatchToProps
)(BlogsList);
