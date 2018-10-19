const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const TodoApp = require('TodoApp');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<TodoApp/>,
	document.getElementById('app')
);