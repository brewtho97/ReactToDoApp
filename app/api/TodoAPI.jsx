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
  },
  filterTodos: function(todos, showCompleted, searchText) {
    let filteredTodos = todos;

    //Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    //Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      let text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText.toLowerCase()) > -1;
    });

    //Sort non completed firs
    filteredTodos.sort((a,b) => {
      
      if (!a.completed && b.completed) { //If a isn't completed and b is then put b first.
        return -1;
      }
      else if (a.completed && !b.completed) {
        return 1;
      }
      else {
        return 0;
      }
    });

    return filteredTodos;
  }
};