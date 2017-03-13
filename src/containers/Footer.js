import React from 'react';
import { connect } from 'react-redux';

import { setVisibilityFilter} from '../actions';

import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
} from '../constants';

import Button from '../components/Button';

const buttons = [{
  filter: SHOW_ALL,
  label: 'All'
}, {
  filter: SHOW_ACTIVE,
  label: 'Active'
}, {
  filter: SHOW_COMPLETED,
  label: 'Completed'
}];

const getRemainingTodos = (todos) => todos.filter(todo => !todo.completed);

const Footer = ({ visibilityFilter, remainingTodos, filterTodos }) => {
  const count = remainingTodos.length;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count}</strong>
        <span>{` item${count > 1 ? 's' : ''} left`}</span>
      </span>
      <ul className="filters">
        {buttons.map(({ filter, label }, index) => (
          <li key={index}>
            <Button
              active={filter === visibilityFilter}
              onClick={() => filterTodos(filter)}
            >{label}</Button>
          </li>
        ))}
      </ul>
    </footer>
  );
};

const mapStateToProps = (state) => ({
  remainingTodos: getRemainingTodos(state.todos),
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = (dispatch) => ({
  filterTodos: (filter) => dispatch(setVisibilityFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
