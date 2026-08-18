import { THEMES } from "../../utils/constanst.js"
import { getTheme, switchTheme } from "../../utils/theme.js"

export const Switcher = ({children, callback}) => {
  return (
    <button className = "switcher" onClick = {() => {
        callback(getTheme() === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)
        switchTheme()
      }}>
      {children}
    </button>
  )
}