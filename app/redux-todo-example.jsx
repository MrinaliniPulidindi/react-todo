var redux = require('redux');

console.log('redux-example');

var defaultState = {
name:'Anonymous',comments:'abc',blogs:[]
};

var action = {
  type:'BLOG_CHANGED',
  name:'Mrinalini'
};

var reducer = (state={defaultState}, action) => {
//state = (state||{name:'Anonymous'});
//console.log('New action',action);
 switch(action.type)
{
case 'BLOG_CHANGED':
return{
...state,
 name: action.name
};
 default:return state;
}
};
// creates a store with given reducer(state,action)
var store = redux.createStore(reducer, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f=>f));
var unsubscribe = store.subscribe(()=> {
  var currentState = store.getState();
  console.log('currentState',{currentState});
});                                     // subscribe to actions

store.dispatch({
  type:'BLOG_CHANGED',
  name:'Mrinalini'
});                 // dispatch actions

//unsubscribe();    // to unsubscribe actions
store.dispatch({
  type:'BLOG_CHANGED',
  name:'Kiran'
});                 // dispatch actions
