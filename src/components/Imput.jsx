import React from 'react'
function Imput( props) {
    const Inp ={
        cos:props.cos,
        type:props.type,
        phr:props.phr,
        ID:props.ID,
    }
    
  return (
    <form method='post' style={{display:'flex',width:350,}}>
        <input type={Inp.type}  className={Inp.cos} placeholder={Inp.phr} id={Inp.ID} required/>
    </form>
  )
}

export default Imput