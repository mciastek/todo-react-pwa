import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

const Header = ({ makeNewTodo }) => {
  const onKeyDown = ({ which, target }) => {
    const ENTER = 13;
    const value = target.value;

    if (which === ENTER && value) {
      makeNewTodo(value);
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

const mapDispatchToProps = (dispatch) => ({
  makeNewTodo: (text) => dispatch(addTodo(text))
});

export default connect(null, mapDispatchToProps)(Header);
