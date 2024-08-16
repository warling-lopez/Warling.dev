import React from 'react'
import { Link } from 'react-router-dom';

function Button(props) {

    const btn ={
        txt:props.txt,
        lk:props.lk,
        cos:props.cos,
        type:props.type,
    }
  return (
    <div style={{width:350,right:0, position:'relative'}}>
        <Link to={btn.lk}> 
            <button type={btn.type} className={btn.cos}>
                {btn.txt}
            </button>
        </Link>
    </div>
  )
}

export default Button;