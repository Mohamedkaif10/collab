import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  { BookmarksProvider } from "./Context/bookmarkContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BookmarksProvider>
      <App />
    </BookmarksProvider>
  </React.StrictMode>,
)
