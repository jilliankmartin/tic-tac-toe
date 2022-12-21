import React from 'react';
import './Square.css';

const Square = ({classIndex, value, squares, setSquares, turn, setTurn, round, setRound, computersTurn, setComputersTurn}) => {
  const onClickHandler = () => {
    if (computersTurn) {
      return;
    }
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
    setTurn(turn + 1)
    setComputersTurn(true)
  }

  return <div className={`square ref-${classIndex}`} onClick={onClickHandler}><span className="value">{value}</span></div>;
};

export default Square;