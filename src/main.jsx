import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
