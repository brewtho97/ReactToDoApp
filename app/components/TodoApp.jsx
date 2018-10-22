const React = require('react');
const TodoList = require('TodoList');
const TodoAdd = require('TodoAdd');
const TodoSearch = require('TodoSearch');

const TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Tidy bedroom'
        },
        {
          id: 3,
          text: 'Learn React'
        },
        {
          id: 4,
          text: 'Profit???'
        }
      ]
    };
  },
  handleAddTodo: function(text) {
    alert('new todo: ' + text);
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function() {
    const {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <TodoAdd onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;