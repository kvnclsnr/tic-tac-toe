import { THEMES } from "./constanst.js"

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
? "dark"
: "light"

export const setTheme = (theme) => {
  document.documentElement.dataset.theme = theme
}

export const getTheme = () => {
  return document.documentElement.dataset.theme
}

export const switchTheme = () => {
  const current = getTheme()
  
  setTheme(current === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)
}

export const initTheme = () => {
  setTheme(systemTheme)
}