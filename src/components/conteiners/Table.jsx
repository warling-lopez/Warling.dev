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
      <Skills 
        icon={cloud} 
        title={'Cloud Computing'} 
        desc={'Utilizo recursos informáticos a través de Internet, aprovechando el almacenamiento y procesamiento en la nube para potenciar la infraestructura de su empresa.'}
      />
      <Skills 
        icon={plane} 
        title={'Desarrollo veloz'} 
        desc={'Desarrollo soluciones ágiles y eficientes, adaptándome rápidamente a las necesidades de su empresa para alcanzar sus objetivos en tiempo récord.'}
      />
      <Skills 
        icon={seo} 
        title={'SEO'} 
        desc={'Mejoro la visibilidad del sitio web de su empresa en los resultados de búsqueda para atraer mayor tráfico orgánico.'}
      />
      <Skills 
        icon={stadistica} 
        title={'Gana más dinero'} 
        desc={'Aplico estrategias diseñadas para maximizar el rendimiento financiero, impulsando el crecimiento sostenible de su empresa.'}
      />
      <Skills 
        icon={color} 
        title={'Gestión de proyectos'} 
        desc={'Planifico, coordino y ejecuto proyectos de principio a fin, asegurando que se cumplan los objetivos establecidos para su empresa.'}
      />
      <Skills 
        icon={zap} 
        title={'Automatización'} 
        desc={'Optimizo el rendimiento del código para asegurar que las aplicaciones de su empresa funcionen de manera rápida y eficiente.'}
      />
    </div>
  )
}

export default Table
