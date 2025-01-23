import { StrictMode } from 'react'  // Wrapper component to highlight problems in the application 
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' // Uses the HTML5 history API to keep the user interface in sync with the URL


createRoot(document.getElementById('root')).render( // Grabs the DOM element with the root ID and creates a root container for cafe-app, render quite literally just renders the root
  <StrictMode> {/* Enforces and checks for potential problems in the React code */}
    <BrowserRouter> {/* wraps the App component, allows client-side routing */}
      <App /> {/* Main component that contains application's logic and structure */}
    </BrowserRouter>
  </StrictMode>,
)
