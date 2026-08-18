export const Icon = ({iconName}) => {
  
  if (iconName === null) return null
  
  return (
    <svg className = "icon">
      <use href = {`./src/assets/icons.svg#icon-${iconName}`}></use>
    </svg>
  )
}