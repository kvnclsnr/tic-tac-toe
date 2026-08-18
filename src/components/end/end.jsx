import { COLORS, SHIFTS } from "../../utils/constanst.js"
import { Icon } from "../icon/icon.jsx"

export const End = ({result = null, reset}) => {
  return (
    <div className = {`win ${result === null ? "default" : result === SHIFTS.X ? COLORS.RED : COLORS.BLUE}`}>
      <div className = "content">
        {
          result !== null
          ? (
            <>
            <span>¡Ganador</span>
              <Icon iconName = {result}></Icon>
            <span>!</span>
            </>
          )
          : <span>¡Ha habido un Empate!</span>
        }
      </div>
      
      <button onClick = {reset}>Jugar de Nuevo</button>
    </div>
  )
}