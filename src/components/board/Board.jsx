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
  const [squares, setSquares] = useState(defaultSquaresState);
  const [round, setRound] = useState(0);
  const [turn, setTurn] = useState(0)
  // const [score, setScore] = useState({player: 0, computer: 0});
  const [computersTurn, setComputersTurn] = useState(false);

  const isWinner = (squares) => {
    if (!squares) {
      return
    }
    const winningScores = [(1 + 2 + 3), (4 + 5 + 6), (7 + 8 + 9), (1 + 4 + 7), (2 + 5 + 8), ( 3 + 6 + 9), (1 + 5 + 9), (7 + 5 + 3)]
    const totalScore = squares.reduce((a, b) => a + b, 0);
    return winningScores.find((score) => score === totalScore)
  }

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
        setTurn(turn + 1)
      }, 2000)
    }
  }, [squares, computersTurn, round, turn])

  useEffect(() => {
    if (round === 9 && round !== 0) {
      //do something to end game
    }
    const getSquareValues = (playerToken) => squares.filter((square) => square.value === playerToken).map((square) => square.id);
    const playerIsWinner = isWinner(getSquareValues("x"))
    const computerIsWinner = isWinner(getSquareValues("o"))

    if (playerIsWinner) {
      console.log("WINNER")
    }
    if (computerIsWinner) {
      console.log("Computer won :(")
    }

  }, [squares, computersTurn, round, turn])

  return (
    <div class="board">
      {squares.map((square) => {
        return (<Square classIndex={square.id} value={square.value} squares={squares} setSquares={setSquares} turn={turn} setTurn={setTurn} round={round} setRound={setRound} computersTuen={computersTurn} setComputersTurn={setComputersTurn}/>)
      })}
    </div>
    
  );
};

export default Board;