var React = require('react');
var Todo = require('app/components/Todo.jsx');

var TodoList = React.createClass({
  render: function () {
    var {todos} = this.props;

    var renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;