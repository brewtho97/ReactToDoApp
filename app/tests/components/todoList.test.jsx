const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');
const {Provider} = require('react-redux');

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('Todo List', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo Component for each todo item', () => {
    const todos = [{
        id: 1,
        text: 'Do something',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      },
      {
        id: 2,
        text: 'Check Mail',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }];

      const store = configure({
        todos
      });
      const provider = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <ConnectedTodoList/>
        </Provider>
        );
      
      let todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
      let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
      expect(todosComponents.length).toBe(todos.length);
  });

  it('should render a message if there are no todos', () => {
    const todos = [];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    const $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});