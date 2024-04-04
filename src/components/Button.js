import React from 'react';
import './styles/Button.css';

const Button = ({ color, text, onClick, disabled }) => {
    const btnColor = disabled ? '#cccccc' :
    color ? color : '#3498db'; //default color if no color is passed
  return (
    <button
      className={`custom-button ${disabled ? 'disabled' : ''}`}
      style={{backgroundColor: btnColor}}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;