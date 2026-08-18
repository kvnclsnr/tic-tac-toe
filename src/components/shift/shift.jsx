import { COLORS, SHIFTS } from "../../utils/constanst"

export const Shift = ({children, shift}) => {
  return (
    <div className = {`shift ${shift === SHIFTS.X ? COLORS.RED : COLORS.BLUE}`}>
      <span>Turno de</span>
      {children}
    </div>
  )
}