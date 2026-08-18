import "./styles/main.scss"

import { createRoot } from "react-dom/client"

import { App } from "./app.jsx"

import { initTheme } from "./utils/theme.js"

initTheme()

const root = createRoot(document.getElementById("root"))

root.render(
  <>
    <App></App>
  </>
)