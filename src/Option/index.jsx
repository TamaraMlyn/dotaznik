import React from 'react';
import Icon from '../Icon/index';
import './style.css';

const Option = ({ type, text, onSelected }) => {
  const handleClick = () => {
    console.log('spíše souhlasím');
    onSelected();
  };

  return (
    <div onClick={handleClick} className="option">
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};

export default Option;
