const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

export const TodoAdd = React.createClass({
  handleFormSubmit: function(e) {
    e.preventDefault();

    let {dispatch} = this.props;
    let text = this.refs.todoText.value;

    if (text && text.length > 0) {
      //Clear value and call function that's passed as a prop.
      this.refs.todoText.value = '';
      dispatch(actions.addTodo(text));
    }
    else {
      this.refs.todoText.focus();
    }
  }, 
  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" ref="todoText" placeholder="Enter a new item..."/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(TodoAdd);