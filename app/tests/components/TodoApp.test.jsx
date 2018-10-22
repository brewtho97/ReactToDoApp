const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

const TodoApp = require('TodoApp');

describe('Todo App', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    const todoText = 'test text';
    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should toggle completed value when handleToggle is called', () => {
    const todoData = {
      id: 11,
      text: 'test features',
      completed: false
    };

    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    //Check the todo item has completed set as false.
    expect(todoApp.state.todos[0].completed).toBe(false); 
    todoApp.handleToggle(11); //Call handleToggle...
    //Check the value changed to true...
    expect(todoApp.state.todos[0].completed).toBe(true); 
  });
});