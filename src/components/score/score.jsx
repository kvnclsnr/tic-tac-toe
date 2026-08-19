import { Icon } from "../icon/icon.jsx"

import { COLORS, ICONS } from "../../utils/constanst.js"

export const Score = ({text, counter, icon, isActive = false}) => {
  return (
    <div className = {`score ${COLORS[icon] ?? ""} ${isActive ? "active" : ""}`}>
      
      <strong>{text}</strong>
      
      <Icon iconName = {icon}></Icon>
      
      <span>{counter}</span>
      
    </div>
  )
}