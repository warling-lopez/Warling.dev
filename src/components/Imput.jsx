import React from 'react'
function Imput( props) {
    const Inp ={
        cos:props.cos,
        type:props.type,
        phr:props.phr,
    }
    
  return (
    <div style={{display:'flex',width:350,}}>
        <input type={Inp.type}  className={Inp.cos} placeholder={Inp.phr} required/>
    </div>
  )
}

export default Imput