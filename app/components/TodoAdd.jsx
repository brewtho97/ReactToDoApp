const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

export class TodoAdd extends React.Component {
  handleFormSubmit(e) {
    e.preventDefault();

    let {dispatch} = this.props;
    let text = this.refs.todoText.value;

    if (text && text.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(text));
    }
    else {
      this.refs.todoText.focus();
    }
  }
  render() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <input type="text" ref="todoText" placeholder="Enter a new item..."/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
};

export default connect()(TodoAdd);