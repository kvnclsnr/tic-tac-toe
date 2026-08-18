const favicon = document.querySelector('link[rel="icon"]')
const path = "./favicons/"

export const setFavicon = (icon) => {
  favicon.href = `${path}${icon}.svg`
}