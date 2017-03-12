import React from 'react';

const Button = ({
  active,
  onClick,
  children
}) => {
  return (
    <button
      type="button"
      className={active ? 'selected' : ''}
      onClick={active ? null : onClick}
    >
      {children}
    </button>
  );
};

export default Button;
