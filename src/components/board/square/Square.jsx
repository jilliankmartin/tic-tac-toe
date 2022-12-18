import React from 'react';
import './Square.css';

const Square = ({classIndex, value, squares, setSquares, round, setRound, setComputersTurn}) => {
  const onClickHandler = () => {
    setSquares(
      squares.map((square) => {
        if (square.id === classIndex) {
          return {
            ...square,
            value: "x",
          }
        }
        return square;
      })
    );
    setRound(round + 1)
    setComputersTurn(true)
  }

  return <div className={`square ref-${classIndex}`} onClick={onClickHandler}>{value}</div>;
};

export default Square;