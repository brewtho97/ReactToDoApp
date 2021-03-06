const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const {Provider} = require('react-redux');
const expect = require('expect');
const $ = require('jquery');

const configureStore = require('configureStore');
import TodoList from 'TodoList';
const TodoApp = require('TodoApp');

describe('Todo App', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    let store = configureStore.configure();
    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    let todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    let todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);
    expect(todoList.length).toEqual(1);
  });
});