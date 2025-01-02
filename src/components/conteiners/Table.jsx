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
      <Skills icon={cloud} title={'Cloud Computing'} desc={'Uso de recursos informáticos a través de Internet, como almacenamiento y procesamiento de datos en la nube.'}/>
      <Skills icon={plane} title={'Desarrollo veloz'} desc={'Creamos soluciones ágiles y eficientes, adaptándonos rápidamente a las necesidades de tu proyecto para que alcances tus objetivos en tiempo récord.'}/>
      <Skills icon={seo} title={'Seo'} desc={'Mejorar la visibilidad de un sitio web en los resultados de búsqueda para atraer más tráfico orgánico.'}/>
      <Skills icon={stadistica} title={'Seo-camp'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus inventore, quam maxime tenetur.'}/>
      <Skills icon={color} title={'Gestión de proyectos'} desc={'Capacidad para planificar, coordinar y ejecutar proyectos de principio a fin, asegurando que se cumplan los objetivos.'}/>
      <Skills icon={zap} title={'Automatización '} desc={'Optimización del rendimiento del código para que las aplicaciones funcionen de manera más rápida y eficiente.'}/>
      
    </div>
  )
}

export default Table