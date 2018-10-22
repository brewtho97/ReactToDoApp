const $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function() {
    const stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    }
    catch(e) {
      console.log('JSON parse failed when getting todos with the following error:');
      console.log(e);
    }

    return $.isArray(todos) ? todos : [];
  }
};