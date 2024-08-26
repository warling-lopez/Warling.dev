import React from 'react'
import '../css/css-components/global_components.css'
function Users(props) {
  
  return (

    <div className='proyectos'>
        <h4> {props.id}</h4>
        <h1> {props.Tittle}</h1>
        <h2> {props.Desc}</h2>
        <h3> {props.Type}</h3>
    </div>
  )
}

export default Users