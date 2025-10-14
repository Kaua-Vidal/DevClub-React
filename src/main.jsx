import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // default
// import {App, App2} from './App.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
)
