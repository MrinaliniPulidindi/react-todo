var React = require('react');

var AddComments = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var commentText = this.refs.commentText.value;

    if (commentText.length > 0) {
      this.refs.commentText.value = '';
      this.props.onAddComment(commentText);
    } else {
      this.refs.commentText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="commentText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Comments</button>
        </form>
      </div>
    );
  }
});

module.exports = AddComments;
