import React from 'react';

const TodoItem = ({ completed, text, onClick }) => {
  return (
    <li className={completed ? 'completed' : ''}>
      <div className="view">
        <input
          onClick={onClick}
          className="toggle"
          type="checkbox"
          defaultChecked={completed}/>
        <label>{text}</label>
      </div>
    </li>
  );
};

export default TodoItem;
