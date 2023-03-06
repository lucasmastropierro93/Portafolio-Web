import React from 'react'
import "./Contacto.css"
const Contacto = () => {
  return (
    <>
     <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>Contacto</h4>
            <h1>Contactate conmigo</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                
                <div className='details'>
                  <h1>Lucas Matias Mastropierro</h1>
                  <p>Developer</p>
                  <p>Conéctese conmigo a través de mis datos</p> <br />
                  <p>Phone: +54 9 1135241089</p>
                  <p>Email: lucasmastro93@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <a href='https://www.facebook.com/lucas.mastro.12/'>
                    <button className='btn_shadow'>
                      <i className='fab fa-facebook-f'></i>
                    </button>
                    </a>
                    <a href='https://www.instagram.com/lucasmastro1/'>
                    <button className='btn_shadow'>
                      <i className='fab fa-instagram'></i>
                    </button>
                    </a>
                    <a href='https://www.linkedin.com/in/lucas-mastropierro-a199a322b/'>
                    <button className='btn_shadow'>
                      <i className='fab fa-linkedin'></i>
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacto
