import { Icon } from "../icon/icon.jsx"

import { COLORS, SHIFTS } from "../../utils/constanst.js"

export const Cell = ({cell, handler}) => {
  return (
    <button className = {`cell ${COLORS[cell] ?? ""}`} onClick = {handler}>
      
      {cell && <Icon iconName = {cell}></Icon>}
      
    </button>
  )
}