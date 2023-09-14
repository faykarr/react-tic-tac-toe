import { useState } from "react";

function Square() {
  const [value, setValue] = useState("");

  function handleClick() {
    setValue("X");
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <div className="board">
      <Square value={squares[0]} />
      <Square value={squares[1]} />
      <Square value={squares[2]} />
      <Square value={squares[3]} />
      <Square value={squares[4]} />
      <Square value={squares[5]} />
      <Square value={squares[6]} />
      <Square value={squares[7]} />
      <Square value={squares[8]} />
    </div>
  );
}

export default Board;
