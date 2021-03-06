const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

import {TodoSearch} from 'TodoSearch';

describe('Todo Search', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it ('should dispatch set search text on input change', () => {
    const searchText = 'Dog';
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    };

    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    expect(spy).toHaveBeenCalled(action);
  });

  it ('should dispatch toggle SHOW_COMPLETED when checkbox checked', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalled(action);
  });
});