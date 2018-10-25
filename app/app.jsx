const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const TodoApp = require('TodoApp');
const actions = require('actions');
const store = require('configureStore').configure();

store.subscribe(() => {
	console.log('New State: ', store.getState());
});

store.dispatch(actions.addTodo('Clean the garden'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App CSS
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<Provider store={store}>
		<TodoApp/>
	</Provider>,
	document.getElementById('app')
);