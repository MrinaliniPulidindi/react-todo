var React = require('react');
var ReactDOM = require('react-dom');

var BlogsList = require('BlogsList');
var {Route,Router,IndexRoute,hashHistory}= require('react-router');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={BlogsList}></Route>
</Router>,
document.getElementById('app'));
