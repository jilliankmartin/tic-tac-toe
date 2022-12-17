import React from 'react';
import './Square.css';

const Square = ({classIndex}) => {
  const greeting = 'Square Component!';

  return <div className={`square ref-${classIndex}`}>{greeting}</div>;
};

export default Square;