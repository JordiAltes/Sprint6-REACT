import React, { useState } from "react"
import Escena from "./components/Escena.jsx"
import frases from "./components/frases"
import Controlador from "./components/Controlador.jsx"

 function App() {
  const escenas = frases.map(item => <Escena frase={item.text}/>)
  console.log(escenas)
  return (escenas)
  
}
export default App 

/* function App() {
  const [fraseActual, setFraseActual] = useState(0)
  const [frasesLista, setFrasesLista] = useState(frases)

  const manejarSiguiente = () => {
    if (fraseActual === frasesLista.length - 1) {
      setFraseActual(0)
    } else {
      setFraseActual(fraseActual + 1)
    }
  }

  const manejarAnterior = () => {
    if (fraseActual === 0) {
      setFraseActual(frasesLista.length - 1)
    } else {
      setFraseActual(fraseActual - 1)
    }
  }

  return (
    <>
      {frasesLista.map((frase, index) => {
        const clase = index === fraseActual ? 'frase-rojo' : 'frase'
        return <Escena frase={frase.text} key={frase.id} clase={clase} />
      })}
      <Controlador 
        manejarSiguiente={manejarSiguiente} 
        manejarAnterior={manejarAnterior} 
      />
    </>
  )
} */
