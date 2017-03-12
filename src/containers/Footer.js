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

const Footer = ({ visibilityFilter, filterTodos }) => {
  return (
    <footer className="footer">
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
  visibilityFilter: state.visibilityFilter
});

const mapDispatchToProps = (dispatch) => ({
  filterTodos: (filter) => dispatch(setVisibilityFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
