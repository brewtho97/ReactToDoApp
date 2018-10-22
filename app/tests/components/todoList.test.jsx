const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

const TodoList = require('TodoList');
const Todo = require('Todo');

describe('Todo List', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo Component for each todo item', () => {
    const todos = [{
        id: 1,
        text: 'Do something'
      },
      {
        id: 2,
        text: 'Check Mail'
      }];

      const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
      
      //Stores todo components found in the todo list
      const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
      expect(todosComponents.length).toBe(todos.length);
  });

  it('should render a message if there are no todos', () => {
    const todos = [];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    const $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});