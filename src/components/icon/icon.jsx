export const Icon = ({iconName = null}) => {
  
  if (!iconName) return null
  
  return (
    <svg className = "icon">
      <use href = {`./icons.svg#icon-${iconName}`}></use>
    </svg>
  )
}