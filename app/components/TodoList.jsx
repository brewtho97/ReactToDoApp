const React = require('react');
const {connect} = require('react-redux');
import Todo from 'Todo';
const TodoAPI = require('TodoAPI');

export class TodoList extends React.Component {
  render() {
    const {todos, showCompleted, searchText} = this.props;

    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        )
      }
      
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
};

//Connects the store to the todoList component.
export default connect(
  (state) => {
    return state;
  }
)(TodoList);