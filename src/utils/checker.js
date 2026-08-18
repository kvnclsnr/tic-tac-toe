import { WINNING_COMBINATIONS } from "./constanst.js"

export const checkWinner = (board) => {
  for (const [ a, b, c ] of WINNING_COMBINATIONS) {
    if (board[a] === null) continue
    
    if (board[a] === board[b] && board[b] === board[c]) {
      return board[a]
    }
  }
  
  return null
}

export const checkDraw = (board) => {
  for (const cell of board) {
    if (cell === null) return false
  }
  
  return true
}