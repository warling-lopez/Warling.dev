import React from 'react'
import Logo from '../components/logo'
import Btn from '../components/Button'
import Inp from '../components/Imput'
import Hello from '../components/conteiners/Hello_warling'
import Nav from '../components/conteiners/Nav'
import Circle_background from '../assets/desing_web/Circle_background'
import Table from '../components/conteiners/Table'
/*
txt: para el stilo de los componentes
lk: para el direcciones = src de los componentes
cos: 'class of style' de los componentes

*/
function Pruevas_de_componentes() {
  return (
    <div className='prueva_gap'>
        <Logo lk={'/'} cos={'logo-img'}/>
        <Nav cos={'nav-list'} cos_lk={'lk-list'}/>
        <Btn txt='PROYECTS' lk={'/'} cos={'btn-azul'}/>
        <Circle_background cos={'circleBack'}/>
        <Hello/>
        <Inp type={'email'} cos={'InpClassic'} phr={'Escribe tu coreo aqui'}/>
        <br />
        <div>
        <Table/>

        </div>
    </div>
  )
}

export default Pruevas_de_componentes;