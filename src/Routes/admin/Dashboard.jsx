import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <ul>
            <Link to={'/'}>
                <li>skills</li>
            </Link>
            <Link to={'/Dashboard/proyects'}>
                <li>proyects</li>
            </Link>
            <Link to={'/'}>
                <li>questions</li>
            </Link>
        </ul>
    </div>
  )
}

export default Dashboard