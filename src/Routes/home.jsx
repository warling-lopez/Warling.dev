import React from 'react'
import Logo from '../components/logo'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
        <Logo lk={'/'} cos={'logo-img'}/>
        <Link to={'/desing/pruevas'}>pruevas</Link>
    </>
  )
}

export default Home