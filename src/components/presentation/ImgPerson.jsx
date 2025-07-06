import Image from 'next/image'
import React from 'react'


function ImgPerson() {
  return (
    <div>
      <Image className='rounded-full brightness-105' width={"400"} height={"400"} src={"/FotoDePerfil.png"}/>
    </div>
  )
}

export default ImgPerson