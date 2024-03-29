import React, { useState } from 'react'
import logo from "./pic/logo-01.jpg"
const Header = () => {


window.addEventListener("scroll", function() {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
})

const [Mobile, setMobile] = useState(false)


  return (
    <>
    <header className='header'>

<div className='container d_flex'>
    <div className='logo'>
        <img src={logo} alt='imagen mia'style={{marginTop: "-10px"}}/>
    </div>

    <div className='navlink'>
        {/*<ul className='link f_flex uppercase'>*/}
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
            <li><a href='#home'>Inicio</a></li>
            <li><a href='#sobremi'>Sobre mí</a></li>
            <li><a href='#habilidades'>Habilidades</a></li>
            <li><a href='#portfolio'>Portafolio</a></li>
            
            
            <li><button className='home-btn'><a href='#contact'>Contacto</a></button></li>
        </ul>

        <button className='toggle' onClick={()=> setMobile(!Mobile)}>
            {Mobile ? 
            <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>
            }
     
        </button>
    </div>
</div>

    </header>
    </>
  )
}

export default Header
