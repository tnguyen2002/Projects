import React, { useState } from "react";
import calculateWinner from "../calculate_win";
import Board from "./Board";

const Game = () => {
  // TODO: Set up states and functions: position of Xs and Os on board,
  // step number, whether X is next, is there a win or tie, etc.,
  const [board,setBoard] = useState([null,null,null,null,null,null,null,null,null])
  const [stepNumber,setStepNumber]= useState(0)
  const [xIsNext,setXisNext] = useState(true)
  let Winner = calculateWinner(board)
  let Next
  if (xIsNext == true) {
    Next = "X"
  }
  else{
    Next = "O"
  }

  
  let jumpToStart = () => {
    setBoard([null,null,null,null,null,null,null,null,null])
    setStepNumber(0)
    setXisNext(true)
  }
  let handleClick = i => {
    
    if (Winner != null||board[i] != null) {
      return;
    }
    else{
      board[i] = Next
      setBoard(board)
      setXisNext(!xIsNext)
      setStepNumber(stepNumber + 1)
    }
}
let result = (Winner) => {
  if (Winner === null){
    if(stepNumber===9){
      return(
        <div>Tie Game</div>
      )
    }
    else {
      return (
        <div>Next Player{Next}</div>
      )
    }
    }
  else{
    return(
      <div>Winner:{Winner}</div>
    )
  }
  }
  
  return (
    <>
      {/* TODO: Render the board here along with the title, game status,
      and 'Go to Start' button. */}
      <h1 style={{color:"white"}}>Tic Tac Toe</h1>
      <Board squares={board} onClick = {handleClick}/>
      <div className='info-wrapper'>
          <div>
            <button className = 'start-button' onClick={jumpToStart}>Go to Start</button>
          </div>
          <h3 style={{color:"white"}}>{result(Winner)}</h3>
      </div>  
      
    </>
  );
};

export default Game;
