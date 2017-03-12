import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
} from '../constants';

export const addTodo = (id, text) => {
  return {
    type: ADD_TODO,
    id,
    text
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};
