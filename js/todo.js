angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {name:'Jane Jones', done:true, commentDate:'November 15, 2019', email:'jane@yahoo.com', comment:'wow this is cool stuff'},
      {name:'Joe Smith', done:true, commentDate:'November 15, 2019', email:'joe@yahoo.com', comment:'Digital rocks!' }];




    todoList.addTodo = function() {
      todoList.todos.push({name:todoList.todoName, done:false, commentDate:'today', email:'jane@yahoo.com', comment:'wow this is cool stuff'});
      todoList.todoName = '';
      todoList.todoComment = '';
    };




    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };



    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });
