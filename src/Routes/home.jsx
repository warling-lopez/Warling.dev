import React from 'react'
import Logo from '../components/logo'
import Nav from '../components/conteiners/Nav'
import Btn from '../components/Button'
import Inp from '../components/Imput'
import Hello from '../components/conteiners/Hello_warling'
import Circle_background from '../assets/desing_web/Circle_background'
import Table from '../components/conteiners/Table'
import Model3DPersone from '/public/5224543-removebg-preview.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='body-home'>
      <div><Circle_background cos={'circleBack'}/></div>
      
      <div className='navegacion'>
        <Logo lk={'/'} cos={'logo-img'}/>
        <Nav cos={'nav-list'} cos_lk={'lk-list'} cos_menu={'menu-nav'}/>
        <Btn txt='PROYECTS' lk={'/'} cos={'btn-azul'}/>
      </div>
      <div className='justify'>
      <div><Circle_background cos={'circleBack2'}/></div>
        <div className='justify2'>
          
          <div className='textInit'>
            <div>
            <Hello/>
            <Inp type={'email'} cos={'InpClassic'} phr={'Escribe tu coreo aqui'}/>
            <Btn type={"submit"} txt='ENVIAR' lk={'/'} cos={'btn-azul-inp'}/>
            </div>
            <div>
              <img src={Model3DPersone} alt="persona 3d" className='img-3d-persona'/>
            </div>
          </div>
          <Table/>
        </div>

      </div>
    </div>
  )
}

export default Home