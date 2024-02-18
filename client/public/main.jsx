import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { LanguageProvider } from '../context/LanguageContext.jsx'
import { DarkModeProvider } from '../context/DarkModeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </LanguageProvider>
  </React.StrictMode>,
)
