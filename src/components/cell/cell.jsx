import { COLORS, SHIFTS } from "../../utils/constanst.js"

export const Cell = ({children, index, board, update}) => {
  return (
    <button className = {`cell ${board[index] === SHIFTS.X ? COLORS.RED : COLORS.BLUE}`} onClick = {() => update(index)}>
      {children}
    </button>
  )
}