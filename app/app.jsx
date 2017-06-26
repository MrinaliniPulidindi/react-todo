var React = require('react');
var ReactDOM = require('react-dom');
var BlogsList = require('BlogsList');
var {Provider} = require('react-redux');
var {Route,Router,IndexRoute,hashHistory}= require('react-router');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

var actions = require('actions');
var store = require('configureStore').configure();

// store.subscribe(()=>
// {
// console.log('New State:',store.getState());
// });

// store.dispatch(actions.loadBlogData());

ReactDOM.render(
//  <Router history={hashHistory}>
//   <Route path="/" component={BlogsList}></Route>
// </Router>,
// <h1>Redux example</h1>
<Provider store={store}><BlogsList/></Provider>,
document.getElementById('app'));
 //require('./redux-example.js')
