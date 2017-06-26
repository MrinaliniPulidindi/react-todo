var redux = require('redux');
var thunk = require('redux-thunk').default;
var {loadBlogDataReducer,loadCommentDataReducer}=require('reducers');

export var configure =()=>
{
var reducer = redux.combineReducers(
  {
blogs : loadBlogDataReducer,
comments:loadCommentDataReducer
//comment:addCommentDataReducer
  }
);

var store = redux.createStore(reducer, redux.compose( redux.applyMiddleware(thunk),
window.devToolsExtension ? window.devToolsExtension():f=>f));

return store;
};
