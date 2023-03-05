import React  from 'react'
import Header from './Components/Header'
import "./Components/Header.css"
import "./App.css"
import Home from './Components/Hero/Home'
import Habilidades from './Components/Habilidades/Habilidades'
import SobreMi from './Components/SobreMi/SobreMi'
import Portafolio from './Components/Portafolio/Portafolio'
import Contacto from './Components/Contacto/Contacto'
import Footer from './Components/Footer/Footer'


const App = () => {

 
  return (
    <>
    
      <Header/>
      <Home/>
      <SobreMi/>
      <Habilidades/>
      <Portafolio/>
      <Contacto/>
      <Footer/>

    </>


  )
  
}

export default App

