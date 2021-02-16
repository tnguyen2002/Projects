import React from "react";
import Square from "./Square";


const Board = ({squares,onClick}) => (
  // TODO: Populate the board with squares
  <div className = "board">
    {squares.map((item,i) => <Square value = {item} onClick={() => onClick(i)}/>)} 
  </div>
);

export default Board;
