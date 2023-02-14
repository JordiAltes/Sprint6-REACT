import React from "react";
import { useState } from "react";
import Escena from "./components/Escena.jsx";
import frases from "./components/frases";

 function App() {
  
  
  return (
    <div>
      <button className="button" onClick={() => ActiveBack()}>Anterior</button>
      <button className="button" onClick={() => ActiveNext()}>Següent</button>
      {frases.map(item => <Escena 
      key={item.id} 
      frase={item.text}/>)}
    </div>
    )
  
}
export default App
