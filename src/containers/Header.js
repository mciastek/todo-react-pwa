import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

const getMaxId = (todos) => {
  return (todos.length) ? Math.max.apply(Math, todos.map(todo => todo.id)) : 0;
};

const Header = ({ todos, makeNewTodo }) => {
  const onKeyDown = ({ which, target }) => {
    const ENTER = 13;
    const value = target.value;
    const id = getMaxId(todos) + 1;

    if (which === ENTER && value) {
      makeNewTodo(id, value);
      target.value = '';
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        autoFocus
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={onKeyDown}
      />
    </header>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  makeNewTodo: (id, text) => dispatch(addTodo(id, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
