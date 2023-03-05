import React from 'react'
import "./Home.css"
import hero from "../pic/hero.jpg"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
   <>
   <section className='hero' id='home'>
    <div className='container f_flex top'>
        <div className='left top'>
        <h3>Bienvenido a mi mundo</h3>
        <h1>
            Hola soy <span>Lucas Matias Mastropierro</span>
        </h1>
        <h2>
            A <span><Typewriter
            words={['Developer']}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          /></span>
        </h2>

        <p></p>


        <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <a href='https://www.facebook.com/lucas.mastro.12/'>
                    <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                    </button>
                  </a>
                  <a href='https://www.instagram.com/lucasmastro1/'>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  </a>
                  <a href='https://www.linkedin.com/in/lucas-mastropierro-a199a322b/'>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                  </a>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>

        </div>
    </div>
   </section>
   </>
  )
}

export default Home

