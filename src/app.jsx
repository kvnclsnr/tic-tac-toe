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
import { getTheme, switchTheme } from "./utils/theme.js"
import { setVariableCSS } from "./utils/variablesCSS.js"
import { setFavicon } from "./utils/favicon.js"

export const App = () => {
  
  // STATES
  
  const [ board, setBoard ] = useState(Array(9).fill(null))
  
  const [ shift, setShift ] = useState(SHIFTS.X)
  
  const [ end, setEnd ] = useState({
    player: null,
    win: false,
    draw: false,
  })
  
  const [ counter, setCounter ] = useState({
    x: 0,
    draw: 0,
    o: 0,
  })
  
  const [ theme, setTheme ] = useState(getTheme)
  
  // UPDATE
  
  const updateBoard = (index) => {
    if (board[index] !== null) return
    
    // PUT MOVEMENT
    
    const newBoard = [...board]
    newBoard[index] = shift
    
    setBoard(newBoard)
    
    // WIN
    
    const hasWinner = checkWinner(newBoard)
    
    if (hasWinner !== null) {
      const newCounter = {...counter}
      newCounter[hasWinner]++
      
      const newEnd = {...end}
      newEnd.player = hasWinner
      newEnd.win = true
      
      setEnd(newEnd)
      setCounter(newCounter)
      
      return
    }
    
    // DRAW
    
    const isDraw = checkDraw(newBoard)
    
    if (isDraw) {
      const newCounter = {...counter}
      newCounter.draw++
      
      const newEnd = {...end}
      newEnd.draw = true
      
      setEnd(newEnd)
      
      setCounter(newCounter)
      
      return
    }
    
    // CHANGE SHIFT
    
    const newShift = shift === SHIFTS.X ? SHIFTS.O : SHIFTS.X
    
    setShift(newShift)
    setVariableCSS("--current", `var(--${newShift === SHIFTS.X ? "red" : "blue"})`)
    setFavicon(newShift)
  }
  
  const resetBoard = () => {
    setBoard(Array(9).fill(null))
    setShift(SHIFTS.X)
    setVariableCSS("--current", "var(--red)")
    setFavicon(SHIFTS.X)
    setEnd({
      player: null,
      win: false,
      draw: false,
    })
  }
  
  return (
    <>
    
    <Switcher callback = {setTheme}>
      {
        theme === THEMES.DARK
        ? <Icon iconName = {ICONS.DARK}></Icon>
        : <Icon iconName = {ICONS.LIGHT}></Icon>
      }
    </Switcher>
    
    <h1>TIC TAC TOE</h1>
    
    <div className = "scores-wrapper">
      <Score text = "JUGADOR" counter = {counter.x} color = "red" isActive = {shift === SHIFTS.X ? true : false}>
        <Icon iconName = {ICONS.X}></Icon>
      </Score>
      
      <Score text = "EMPATE" counter = {counter.draw}>
        <Icon iconName = {ICONS.DRAW}></Icon>
      </Score>
      
      <Score text = "JUGADOR" counter = {counter.o} color = "blue" isActive = {shift === SHIFTS.O ? true : false}>
        <Icon iconName = {ICONS.O}></Icon>
      </Score>
    </div>
    
    <Board>
      {
        board.map((cell, index) => {
          return (
            <Cell key = {`cell-${index}`} index = {index} board = {board} update = {updateBoard}>
              <Icon iconName = {cell} ></Icon>
            </Cell>
          )
        })
      }
    </Board>
    
    {
      end.win
      ? <End result = {end.player} reset = {resetBoard}></End>
      : end.draw
      ? <End reset = {resetBoard}></End>
      : (
          <Shift shift = {shift}>
            {
              <Icon iconName = {shift}></Icon>
            }
          </Shift>
        )
    }
    </>
  )
}