import React from 'react'
import '../estilos-css/Pantalla.css'
//Acá vemos otra forma de definir un COMPONENTE (puede ser como una función regular con un "return" o, como en este caso, con una ARROW FUNCTION)

//'input' forma parte de los PROPS
const Pantalla = ( {input} ) => (
  <div className='input'>
    {input}
  </div>
)
  


export default Pantalla;