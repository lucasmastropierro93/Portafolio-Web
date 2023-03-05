import React from 'react'
import "./Portafolio.css"
import Portafolio_data from './Portafolio_data'
import Card from "./Card.js"
const Portafolio = () => {
  return (
    <>
     <section className='Portfolio top' id='portfolio'>

<div className='container'>
    <div className='heading text-center'>
        <h4>ENTRA A VER MI PORTAFOLIO </h4>
        <h1>Mi Portafolio</h1>
    </div>
    <div className='content grid'>
        {Portafolio_data.map((value,index) => {
            return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} desc={value.desc}/>
        })}
            
    </div>
</div>
     </section>
    </>
  )
}

export default Portafolio
