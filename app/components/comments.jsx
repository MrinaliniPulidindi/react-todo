var React = require('react');
var Comments = React.createClass(
  {
    render:function()
    {
    var {id,text} = this.props;
      return(<div>{text}</div>);
    }
  }
);
module.exports = Comments;
