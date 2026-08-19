import { COLORS, SHIFTS } from "../../utils/constanst.js"
import { Icon } from "../icon/icon.jsx"

export const End = ({result = null, handler}) => {
  return (
    <div className = {`win ${result === null ? "default" : result === SHIFTS.X ? COLORS.RED : COLORS.BLUE}`}>
      <div className = "content">
        {
          result === null
          ? <span>¡Ha habido un Empate!</span>
          : (
            <>
              <span>¡Ganador</span>
                <Icon iconName = {result}></Icon>
              <span>!</span>
            </>
          )
        }
      </div>
      
      <button onClick = {handler}>Jugar de Nuevo</button>
    </div>
  )
}