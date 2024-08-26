import React from 'react'
import '../../css/css-apps/global_css.css'
function Users(props) {
  
  return (

    <div className='ppapa'>
        <h4> {props.id}</h4>
        <h1> {props.names}</h1>
        <h2> {props.edad}</h2>
        <h3> {props.ciudad}</h3>
    </div>
  )
}

export default Users