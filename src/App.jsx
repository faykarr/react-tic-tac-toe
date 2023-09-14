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
    const newSquares = squares.slice();

    newSquares[index] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  return (
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
  );
}

export default Board;
