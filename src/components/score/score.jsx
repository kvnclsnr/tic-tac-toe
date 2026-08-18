export const Score = ({children, text, counter, color = "default", isActive = false}) => {
  return (
    <div className = {`score ${color} ${isActive ? "active" : ""}`}>
      
      <strong>{text}</strong>
      
      {children}
      
      <span>{counter}</span>
      
    </div>
  )
}