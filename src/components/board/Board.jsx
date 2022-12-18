import React, {useState, useEffect} from 'react';
import './Board.css';
import Square from './square/Square';

const Board = () => {
  const defaultSquaresState = [
    {id: 1, value: ""},
    {id: 2, value: ""},
    {id: 3, value: ""},
    {id: 4, value: ""},
    {id: 5, value: ""},
    {id: 6, value: ""},
    {id: 7, value: ""},
    {id: 8, value: ""},
    {id: 9, value: ""},
  ];
  const [squares, setSquares] = useState(defaultSquaresState) 
  const [round, setRound] = useState(0)
  const [computersTurn, setComputersTurn] = useState(false)

  useEffect(() => {
    if (round !== 0 && computersTurn) {
      setTimeout(() => {
        const emptySquares = squares.filter((square) => square.value === "")
        const randomSquare = emptySquares[Math.floor(Math.random() * emptySquares.length)];
        setSquares(squares.map((square) => {
          if (square.id === randomSquare.id) {
            return {
              ...square,
              value: "o"
            }
          }
          return square;
        }))
        setComputersTurn(false)
      }, 2000)
    }
  }, [squares])

  return (
    <div class="board">
      {squares.map((square) => {
        return (<Square classIndex={square.id} value={square.value} squares={squares} setSquares={setSquares} round={round} setRound={setRound} setComputersTurn={setComputersTurn}/>)
      })}
    </div>
    
  );
};

export default Board;