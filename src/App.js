import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import Header from './componentes/Header';
import { useState } from 'react';
import { evaluate } from 'mathjs';
//el PROP y la variable q contiene el estado tienen el mismo nombre: INPUT
function App() {

  const [input, setInput] = useState ('')

  const agregarInput = valor => {
    setInput(input + valor)
  }

  const calcularResultado = () =>{
   if (input) {
     setInput(evaluate(input))
   } else {
     alert('Ingrese un valor para realizar la operación')
   }
  }
  
  return (
   <div className='App'>
    <Header/>
     <div className='container-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton handleClick={agregarInput}>1</Boton>
          <Boton handleClick={agregarInput}>2</Boton>
          <Boton handleClick={agregarInput}>3</Boton>
          <Boton handleClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton handleClick={agregarInput}>4</Boton>
          <Boton handleClick={agregarInput}>5</Boton>
          <Boton handleClick={agregarInput}>6</Boton>
          <Boton handleClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton handleClick={agregarInput}>7</Boton>
          <Boton handleClick={agregarInput}>8</Boton>
          <Boton handleClick={agregarInput}>9</Boton>
          <Boton handleClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton handleClick={calcularResultado}>=</Boton>
          <Boton handleClick={agregarInput}>0</Boton>
          <Boton handleClick={agregarInput}>.</Boton>
          <Boton handleClick={agregarInput}>/</Boton>
        </div>   
        <div className='fila'>
          <BotonClear handleClear={()=> setInput('')}>
            Clear
          </BotonClear>
        </div>       
     </div>
    </div>
  );
}

export default App;
