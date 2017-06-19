var React = require('react');
var TodoList = require('app/components/TodoList.jsx');
var AddTodo = require('app/components/AddTodo.jsx');
var uuid = require('uuid');
var CommentsList = require('app/components/CommentsList.jsx');
var AddComments = require('app/components/AddComments.jsx');

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
}],
comments:[{
  id:1,
  text:'comment1'
},
{
  id:2,
  text:'comment2'
}
]
    };
  },
  handleAddTodo: function (text) {
    debugger;
   this.setState({
     todos: [
       ...this.state.todos,
       {
         id: uuid(),
         text: text
       }
     ]
   });
 },
 handleAddComment: function (text) {
   debugger;
  this.setState({

    comments: [
      ...this.state.comments,
      {
        id: uuid(),
        text: text
      }
    ]
  });
},
  render: function()
  {
    var {todos,comments} = this.state;
    return(
      <div>
      <h1 className="page-title">Blogs</h1>
             <div className="row">
               <div className="column small-centered small-11 medium-6 large-5">
                 <div className="container">
      <TodoList todos={todos}>Todo App</TodoList>
     <AddTodo onAddTodo={this.handleAddTodo}/>
     <CommentsList comments={comments}>Todo App</CommentsList>
    <AddComments onAddComment={this.handleAddComment}/>
   </div>
            </div>
          </div>
        </div>
   );
 }
});

module.exports = TodoApp;
