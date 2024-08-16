import React from 'react'


function Skills(props) {
  
  const skills={
    icon:props.icon,
    title:props.title,
    desc:props.desc
  }
  return (
    <div>
      <div style={{width:'300px'}}>
        <div><div style={{display:'grid', width:"50px",height:"50px",background:'rgb(15, 21, 43)', borderRadius:'50%', placeItems:'center'}}> <img className='icon-svg' src={skills.icon}/></div></div>
        <div><h2 style={{color:"#cecece"}}>{skills.title}</h2></div>
        <div><b style={{color:'#808fac'}}>{skills.desc}</b></div>
      </div>
    </div>
  )
}

export default Skills