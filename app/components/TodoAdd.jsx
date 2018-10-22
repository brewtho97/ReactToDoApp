const React = require('react');

const TodoAdd = React.createClass({
  handleFormSubmit: function(e) {
    e.preventDefault();
    const text = this.refs.todoText.value;

    if (text && text.length > 0) {
      //Clear value and call function that's passed as a prop.
      this.refs.todoText.value = '';
      this.props.onAddTodo(text);
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

module.exports = TodoAdd;