function calculateWinner(board) {
  // TODO: Given a game board, calculate the winner.
  // If there is no winner, you can return null.
//checks rows
if((board[0]===board[1] && board[1]===board[2]) && board[0]!= null){
  return (board[0])
}
else if((board[3]===board[4] && board[4]===board[5]) && board[3]!= null){
  return (board[3])
}
else if((board[6]===board[7] && board[7]===board[8]) && board[6]!= null){
  return (board[6])
}
//checks columns
else if((board[0]===board[3] && board[3]===board[6]) && board[0]!= null){
  return (board[6])
}
else if((board[1]===board[4] && board[4]===board[7]) && board[1]!= null){
  return (board[1])
}
else if((board[2]===board[5] && board[5]===board[8]) && board[2]!= null){
  return (board[2])
}
//checks diagonals
else if((board[0]===board[4] && board[4]===board[8]) && board[0]!= null){
  return (board[0])
}
else if((board[2]===board[4] && board[4]===board[6]) && board[2]!= null){
  return (board[2])
}
else {
  return (null)
}
}
export default calculateWinner