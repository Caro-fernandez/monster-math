import React from 'react'
import logo from '../Imagenes/maths-logo.jpg'
import '../estilos-css/Header.css'

export default function Header() {
  return (
    <div className='container-logo'>
      <img 
        src ={logo}
        className='logo'
        alt='logo calculadora'
      />
      <h1>Monster Math</h1>
      <p>Tu calculadora</p>  
    </div>
    
  )
}
