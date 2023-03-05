import React from 'react'
import Card from './Card'
import "./Habilidades.css"
import data from "./HabilidadesApi"

const Habilidades = () => {
  return (
    <>
    <section className='features top' id='habilidades'>
      
      <div className='container'>
        <div className='heading'>
            <h4>Habilidades</h4>
            <h1>Lo que hago</h1>
        </div>
        <div className='content grid'>
            {data.map((val, index)=>{
              return <Card key={index} image={val.image} title={val.title} desc={val.desc}/>
            })}
       
        </div>
      </div>
    </section>
    </>
  )
}

export default Habilidades
