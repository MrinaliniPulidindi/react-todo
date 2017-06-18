var React = require('react');
var TodoList = require('app/components/TodoList.jsx')

var TodoApp = React.createClass(
{

  getInitialState: function()
  {
    return{
todos: [{
  id:1,
  text:'walk the dog'
},
{
  id:2,
  text:'Clean the yard'
}]
    };
  },
  render: function()
  {
    var {todos} = this.state;
    return(<TodoList todos={todos}>Todo App</TodoList>);
  }
});

module.exports = TodoApp;
