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
});