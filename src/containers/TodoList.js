import React from 'react';
import { connect } from 'react-redux';

import { toggleTodo } from '../actions';

import TodoItem from '../components/TodoItem';

import { sendNotification } from '../utils/service-worker';

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
  const handleItemClick = (todo) => {
    onTodoClick(todo.id);

    if (!todo.completed) {
      sendNotification({
        title: `You have completed todo with id ${todo.id}!`,
        text: todo.text
      });
    }
  };

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            onClick={() => handleItemClick(todo)}
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
