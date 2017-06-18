var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main')

var {Route,Router,IndexRoute,hashHistory}= require('react-router');

ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Main}></Route>
</Router>,
document.getElementById('app'));
