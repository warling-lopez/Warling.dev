import React from 'react'
import Skills from '../Skills'
import cloud from '/Cloud.svg'
import plane from '/public/plane-papel.svg'
import seo from '/public/seo.svg'
import color from '/public/Color.svg'
import stadistica from '/public/stadistica.svg'
import zap from '/public/zap.svg'
function Table() {
  return (
    <div className='table'>
      <Skills icon={cloud} title={'Seo-camp'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus inventore, quam maxime tenetur.'}/>
      <Skills icon={plane} title={'Seo-camp'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus inventore, quam maxime tenetur.'}/>
      <Skills icon={seo} title={'Seo-camp'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus inventore, quam maxime tenetur.'}/>
      <Skills icon={stadistica} title={'Seo-camp'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus inventore, quam maxime tenetur.'}/>
      <Skills icon={color} title={'Seo-camp'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus inventore, quam maxime tenetur.'}/>
      <Skills icon={zap} title={'Seo-camp'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus inventore, quam maxime tenetur.'}/>
      
    </div>
  )
}

export default Table