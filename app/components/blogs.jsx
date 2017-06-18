var React = require('react');

var Blogs = React.createClass({
  render: function(){
    var {blog} = this.props;
    return(
  <h3>{blog}!!!</h3>
    );
  }
});

module.exports = Blogs;
