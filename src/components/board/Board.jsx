import React from 'react';
import './Board.css';
import Square from './square/Square';

const Board = () => {
  const greeting = 'Board Component!';
  const squares = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
  ];

  return (
    <div class="board">
      {squares.map((square) => {
        console.log(square.id)
        return (<Square classIndex={square.id} />)
      })}
    </div>
    
  );
};

export default Board;