const store = {
  name: "TicTacToe",
  theme: null,
  counter: {
    x: 0,
    o: 0,
    draw: 0,
  }
}

const setLocalStorage = () => {
  localStorage.setItem(store.name, JSON.stringify(store))
}

const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem(store.name))
}

export const loadLocalStorage = () => {
  const savedStore = getLocalStorage()
  
  if (savedStore) {
    Object.assign(store, savedStore)
  }
  
  setLocalStorage()
}

export const setStoreTheme = (theme) => {
  store.theme = theme
  setLocalStorage()
}

export const setStoreCounter = (counter) => {
  Object.assign(store.counter, counter)
  setLocalStorage()
}

export const getStoreTheme = () => {
  return store.theme
}

export const getStoreCounter = () => {
  return {...store.counter}
}