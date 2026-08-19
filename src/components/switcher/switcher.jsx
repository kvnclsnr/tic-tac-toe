import { THEMES } from "../../utils/constanst.js"
import { getOtherTheme, getTheme, switchTheme } from "../../utils/theme.js"

export const Switcher = ({children, handler}) => {
  return (
    <button className = "switcher" onClick = {handler}>
      {children}
    </button>
  )
}