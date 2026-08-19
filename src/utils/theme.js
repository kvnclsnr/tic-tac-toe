import { getStoreTheme, loadLocalStorage, setStoreTheme } from "../services/store.js"
import { THEMES } from "./constanst.js"

loadLocalStorage()

export const defaultTheme = getStoreTheme()
?? (
  window.matchMedia("(prefers-color-scheme: dark)").matches
  ? THEMES.DARK
  : THEMES.LIGHT
)

setStoreTheme(defaultTheme)

export const setTheme = (theme) => {
  document.documentElement.dataset.theme = theme
}

export const getTheme = () => {
  return document.documentElement.dataset.theme
}

export const getOtherTheme = (theme) => {
  return theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
}

export const switchTheme = () => {
  const current = getTheme()
  
  setTheme(getOtherTheme(current))
}

export const initTheme = () => {
  setTheme(defaultTheme)
}