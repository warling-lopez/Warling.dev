import React from 'react'
import { Link } from 'react-router-dom'
import icon_menu from '/public/menu-alt-right.svg'

function Nav(props) {
  const list ={
    cos:props.cos,
    cos_lk:props.cos_lk,
    cos_menu:props.cos_menu,

}
const menu = ()=>{
  // Añadimos un evento 'click' al botón
  icon_menu.addEventListener('click', () => {
    window.onload
  });
}
  return (
    <div >
      {menu}
      <img src={icon_menu} alt="menu" className={list.cos_menu}/>
      <ul className={list.cos}>
        <Link to={'/'} className={list.cos_lk}>
          <li>Home</li>
        </Link>
        <Link to={'/'} className={list.cos_lk}>
          <li>About Me</li>
        </Link>
        <Link to={'/'} className={list.cos_lk}>
          <li>Category</li>
        </Link>
        <Link to={'/'} className={list.cos_lk}>
          <li>Single Post</li>
        </Link>
        <Link to={'/desing/pruevas/'} className={list.cos_lk}>
          <li>Pages</li>
        </Link>
        <Link to={'/'} className={list.cos_lk}>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  )
}

export default Nav