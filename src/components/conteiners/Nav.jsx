import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {
  const list ={
    cos:props.cos,
    cos_lk:props.cos_lk,
}
  return (
    <div >      
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
        <Link to={'/'} className={list.cos_lk}>
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