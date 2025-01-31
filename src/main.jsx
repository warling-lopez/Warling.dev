import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Routes/home'
import Pruevas_de_componentes from './Routes/pruevas-de-componentes'
import Dashboard from './Routes/admin/Dashboard'
import DashProyect from './Routes/admin/Proyects'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./css/css-apps/responsive.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route index element={<App/>}/>
      <Route path='/desing/pruevas' element={<Pruevas_de_componentes/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Dashboard/proyects' element={<DashProyect/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
