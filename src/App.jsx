import { useState } from "react";

function Square({ value, onSquareClicked }) {
  return (
    <button className="square" onClick={onSquareClicked}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) return;

    const newSquares = squares.slice();

    newSquares[index] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  console.log(calculateWinner(squares));
  let winnerStatus = "";
  if (winner) {
    winnerStatus = `The winner is: ${winner}`;
  } else {
    winnerStatus = `Next player is: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <div className="status">{winnerStatus}</div>
      <div className="board">
        <Square value={squares[0]} onSquareClicked={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClicked={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClicked={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClicked={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClicked={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClicked={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClicked={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClicked={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClicked={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const winnerRules = [
    [0, 1, 2], // Index in horizontal board lines
    [3, 4, 5], // Index in horizontal board lines
    [6, 7, 8], // Index in horizontal board lines
    [0, 3, 6], // Index in vertical board lines
    [1, 4, 7], // Index in vertical board lines
    [2, 5, 8], // Index in vertical board lines
    [0, 4, 8], // Index in diagonal board lines
    [2, 4, 6], // Index in diagonal board lines
  ];

  // Checking rules per lines to winner
  for (let i = 0; i < winnerRules.length; i++) {
    // Check if 3 squares are the same
    const [a, b, c] = winnerRules[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  // Return false when there's no winner.
  return false;
}

export default Board;
