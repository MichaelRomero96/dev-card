
import React, { useState } from "react"

// Ciclo de vida en un Componente

// cargar logica en el componente

// Mount - monta el componente

// Component did mount => el componente ha sido montado

// component will update => el componente ha recibido cambio en el estado y debe hacer re-render

// state => Debemos controlar el estado  
// REACT V 17< -- HOOKS
//HOOKS -> ganchos funciones que actualizan el estado en react

// tener un estado en react, utilizamos el useState

// manejar elementos del Dom Virtual usamos useRef

// añadir efectos al componente usamos useEffect

//callback
// es una funcion que se pasa como argumento en otra funcion

/* const sumar = (a, b) => a + b

const imprimirSuma = (fn, a, b) => {
  return console.log(fn(a, b))
}

imprimirSuma(sumar(10, 20)) */

const Contador = () => {
   const [valor, setValor] = useState(0)
   const incrementar = () => setValor(prev => prev + 1 )
   const decrementar = () => setValor(prev => prev - 1 )
  return (
    <>
        <button onClick={incrementar} className="no-hidden">Incrementar</button>
        <button onClick={decrementar} className="no-hidden">Decrementar</button>
        <div id='counter-elem'>{valor}</div>
    </>
  )
}

export default Contador