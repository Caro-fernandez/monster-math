import React from 'react'
import '../estilos-css/Boton.css'

export default function Boton(props) {
// isNaN sirve para saber si el valor que tengo NO es un NÚMERO. En esta funcion establezco q la variable "esOperador" será considerada como tal mientras q NO SEA UN NUM, UN PUNTO O UN =.
  const esOperador = valor => {
    return isNaN(valor) && (valor !=='.') && (valor!== '=')
  }
  return (
    <div
      className= {`container-boton $ {esOperador(props.children) ? 'operador' : null}`.trimEnd()}
      onClick={()=> props.handleClick(props.children)}>
      {props.children}
    </div>
  )
}
