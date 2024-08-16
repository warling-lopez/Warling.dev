import React from 'react'
import Logo from '../components/logo'
import Nav from '../components/conteiners/Nav'
import Btn from '../components/Button'
import Inp from '../components/Imput'
import Hello from '../components/conteiners/Hello_warling'
import Circle_background from '../assets/desing_web/Circle_background'
import Table from '../components/conteiners/Table'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <div><Circle_background cos={'circleBack'}/></div>
      <div><Circle_background cos={'circleBack2'}/></div>
      <div className='navegacion'>
        <Logo lk={'/'} cos={'logo-img'}/>
        <Nav cos={'nav-list'} cos_lk={'lk-list'}/>
        <Btn txt='PROYECTS' lk={'/'} cos={'btn-azul'}/>
      </div>
      <div className='justify'> 
        <div className='justify2'>
          
          <div className='textInit'>

            <Hello/>
            <Inp type={'email'} cos={'InpClassic'} phr={'Escribe tu coreo aqui'}/>
            <Btn type={"submit"} txt='ENVIAR' lk={'/'} cos={'btn-azul-inp'}/>
          </div>
          <Table/>
        </div>

      </div>
    </>
  )
}

export default Home