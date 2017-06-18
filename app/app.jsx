var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main')
var TodoApp = require('app/components/TodoApp.jsx');
var {Route,Router,IndexRoute,hashHistory}= require('react-router');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={TodoApp}></Route>
</Router>,
document.getElementById('app'));
