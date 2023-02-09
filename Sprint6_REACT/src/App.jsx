import React from "react"
import Escena from "./components/Escena.jsx"
import frases from "./components/frases"

function App() {
  const escenas = frases.map(item => <Escena frase={item.text}/>)
  console.log(escenas)
  return (escenas)
  
}
export default App