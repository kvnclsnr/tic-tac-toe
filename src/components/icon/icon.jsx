export const Icon = ({iconName}) => {
  
  if (iconName === null) return null
  
  return (
    <svg className = "icon">
      <use href = {`./icons.svg#icon-${iconName}`}></use>
    </svg>
  )
}