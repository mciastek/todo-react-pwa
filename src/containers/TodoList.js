import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions';

import TodoItem from '../components/TodoItem';

const getTodosByFilter = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const TodoList = ({ todos, onTodoClick }) => {
  console.log(todos);
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            onClick={() => onTodoClick(todo.id)}
            {...todo}
          />
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  todos: getTodosByFilter(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
