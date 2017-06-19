var React = require('react');
var Comments = require('app/components/comments.jsx');

var CommentsList = React.createClass({
  render: function () {
    var {comments} = this.props;

    var renderComments = () => {
      return comments.map((comment) => {
        return (
          <Comments key={comment.id} {...comment}/>
        );
      });
    };

    return (
      <div>
        {renderComments()}
      </div>
    )
  }
});

module.exports = CommentsList;
