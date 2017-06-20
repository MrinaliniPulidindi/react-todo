var React = require('react');

var AddBlog = React.createClass({
  handleSubmit: function (e) {
    var that = this;
    e.preventDefault();

    var todoText = that.refs.todoText.value;

    if (todoText.length > 0) {
      that.refs.todoText.value = '';
      that.props.onAddTodo(todoText);
    } else {
      that.refs.todoText.focus();
    }
  },

  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">{this.props.buttonText}</button>
        </form>
      </div>
    );
  }
});

module.exports = AddBlog;
