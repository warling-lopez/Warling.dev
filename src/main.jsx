import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes/home'
import Pruevas_de_componentes from './Routes/pruevas-de-componentes'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App/>}/>
      <Route path='/desing/pruevas' element={<Pruevas_de_componentes/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
