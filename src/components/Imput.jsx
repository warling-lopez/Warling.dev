import React from 'react'
function Imput( props) {
    const Inp ={
        cos:props.cos,
        type:props.type,
        phr:props.phr,
    }
    
  return (
    <form method='post' style={{display:'flex',width:350,}}>
        <input type={Inp.type}  className={Inp.cos} placeholder={Inp.phr} required/>
    </form>
  )
}

export default Imput