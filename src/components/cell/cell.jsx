import { useRef, useEffect } from "react"

import { Icon } from "../icon/icon.jsx"

import { COLORS, SHIFTS } from "../../utils/constanst.js"

export const Cell = ({cell, disabled, handler}) => {
  
  const iconRef = useRef(null)
  
  useEffect(() => {
    if (cell === null) return
    
    iconRef.current.animate(
      [
        {
          transform: "scale(0.85)",
          opacity: 0.5
        },
        {
          transform: "scale(1)",
          opacity: 1
        }
      ],
      {
        duration: 150,
        easing: "ease"
      }
    )
  }, [cell])
  
  return (
    <button className = {`cell ${COLORS[cell] ?? ""}`} disabled = {disabled} onClick = {handler}>
      
      {
        cell && (
          <span ref = {iconRef}>
            <Icon iconName = {cell}></Icon>
          </span>
        )
      }
      
    </button>
  )
}