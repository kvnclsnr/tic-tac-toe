import { useState } from "react"

import { Board } from "./components/board/board.jsx"
import { Cell } from "./components/cell/cell.jsx"
import { End } from "./components/end/end.jsx"
import { Icon } from "./components/icon/icon.jsx"
import { Score } from "./components/score/score.jsx"
import { Shift } from "./components/shift/shift.jsx"
import { Switcher } from "./components/switcher/switcher.jsx"

import { checkDraw, checkWinner } from "./utils/checker.js"
import { COLORS, ICONS, SHIFTS, THEMES } from "./utils/constanst.js"
import { getOtherTheme, getTheme, switchTheme, systemTheme } from "./utils/theme.js"
import { setVariableCSS } from "./utils/variablesCSS.js"
import { setFavicon } from "./utils/favicon.js"

const FIRST_SHIFT = SHIFTS.X

const EMPTY_BOARD = Array(9).fill(null)

const EMPTY_COUNTER = {
  x: 0,
  o: 0,
  draw: 0,
}

const EMPTY_END = {
  finished: false,
  winner: null,
}

export const App = () => {
  
  // STATES
  
  const [ shift, setShift ] = useState(FIRST_SHIFT)
  
  const [ board, setBoard ] = useState([...EMPTY_BOARD])
  
  const [ counter, setCounter ] = useState({...EMPTY_COUNTER})
  
  const [ end, setEnd ] = useState({...EMPTY_END})
  
  
  const [ theme, setTheme ] = useState(systemTheme)
  
  // UPDATE
  
  const disableBoard = (state) => {
    document.querySelectorAll(".board .cell").forEach(cell => {
      cell.disabled = state
    })
  }
  
  const handlerSwitch = () => {
    const newTheme = getOtherTheme(theme)
    
    switchTheme(newTheme)
    setTheme(newTheme)
  }
  
  const handlerBoard = (index) => {
    if (board[index] !== null) return
    
    const newBoard = [...board]
    newBoard[index] = shift
    
    setBoard(newBoard)
    
    return newBoard
  }
  
  const showWinner = (winner) => {
    const newCounter = {...counter}
    newCounter[winner]++
    
    const newEnd = {...end}
    
    newEnd.finished = true
    newEnd.winner = winner
    
    setCounter(newCounter)
    setEnd(newEnd)
  }
  
  const showDraw = () => {
    const newCounter = {...counter}
    newCounter.draw++
    
    const newEnd = {...end}
    
    newEnd.finished = true
    
    setCounter(newCounter)
    setEnd(newEnd)
  }
  
  const changeShift = () => {
    const newShift = shift === SHIFTS.X ? SHIFTS.O : SHIFTS.X
    
    setShift(newShift)
    
    setVariableCSS("--current", `var(--${COLORS[newShift]})`)
    setFavicon(newShift)
  }
  
  const update = (index) => {
    const newBoard = handlerBoard(index)
    
    const hasWinner = checkWinner(newBoard)
    
    if (hasWinner) {
      showWinner(hasWinner)
      disableBoard(true)
      return
    }
    
    const isDraw = checkDraw(newBoard)
    
    if (isDraw) {
      showDraw()
      disableBoard(true)
      return
    }
    
    changeShift()
  }
  
  const playAgain = () => {
    disableBoard(false)
    
    setShift(FIRST_SHIFT)
    setBoard(EMPTY_BOARD)
    setEnd(EMPTY_END)
    setVariableCSS("--current", "var(--red)")
    setFavicon(FIRST_SHIFT)
  }
  
  const resetGame = () => {
    playAgain()
    setCounter(EMPTY_COUNTER)
  }
  
  return (
    <>
    
    { /* THEME SWITCHER */ }
    
    <Switcher handler = {handlerSwitch}>
      <Icon iconName = {getOtherTheme(theme)}></Icon>
    </Switcher>
    
    { /* TITLE */ }
    
    <h1>TIC TAC TOE</h1>
    
    { /* SCORES */ }
    
    <div className = "scores-wrapper">
      
      <Score text = "JUGADOR"  counter = {counter.x} icon = {ICONS.X} isActive = {shift === SHIFTS.X}></Score>
      
      <Score text = "EMPATE" counter = {counter.draw} icon = {ICONS.DRAW} isActive = {false}></Score>
      
      <Score text = "JUGADOR" counter = {counter.o} icon = {ICONS.O} isActive = {shift === SHIFTS.O}></Score>
      
    </div>
    
    { /* BOARD */ }
    
    <Board>
      {
        board.map((cell, index) => {
          return <Cell key = {`cell-${index}`} cell = {cell} handler = {() => update(index)}></Cell>
        })
      }
    </Board>
    
    { /* GAME FINISHED */ }
    
    {
      !end.finished
      ? (
        <Shift shift = {shift}>
          <Icon iconName = {shift}></Icon>
        </Shift>
      )
      : <End result = {end.winner} handler = {playAgain}></End>
    }
    
    { /* RESET GAME */ }
    
    <button className = "reset-game" onClick = {resetGame}>
      Reiniciar Marcadores
    </button>
    
    </>
  )
}