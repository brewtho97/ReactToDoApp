const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

const {TodoAdd} = require('TodoAdd');

describe('TodoAdd', () => {
  it('should exist', () => {
    expect(TodoAdd).toExist();
  });

  it('should dispatch ADD_TODO when valid todo text is entered', () => {
    const testText = 'Check mail';
    const action = {
      type: 'ADD_TODO',
      text: testText
    };
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<TodoAdd dispatch={spy}/>);
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = testText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO with invalid data', () => {
    let todoText = '';
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<TodoAdd dispatch={spy}/>);
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});