const root = document.documentElement

export const setVariableCSS = (property, set) => {
  root.style.setProperty(property, set)
}