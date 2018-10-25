const React = require('react');
const uuid = require('node-uuid');
const moment = require('moment');

import TodoList from 'TodoList';
import TodoAdd from 'TodoAdd';
import TodoSearch from 'TodoSearch'

export class TodoApp extends React.Component {
  render() {
    return (
      <div className="main-page">
        <h1 className="page-title">Todo App</h1>
      
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <TodoAdd/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

module.exports = TodoApp;