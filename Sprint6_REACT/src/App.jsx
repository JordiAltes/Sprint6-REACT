import React from "react";
import { useState } from "react";
import Escena from "./components/Escena.jsx";
import frases from "./components/frases";

function App() {
  const [position, setPosition] = useState(1);
  function ActiveNext() {
    setPosition(position >= frases.length ? 1 : position + 1);
  }
  function ActiveBack() {
    setPosition(position <= 1 ? frases.length : position - 1);
  }

  return (
    <div>
      <div className="buttons">
        <button className="button" onClick={() => ActiveBack()}>
          Anterior
        </button>
        <button className="button" onClick={() => ActiveNext()}>
          Següent
        </button>
      </div>

      {frases.map((item) => (
        <Escena
          key={item.id}
          frase={item.text}
          isPainted={position === item.id}
        />
      ))}
    </div>
  );
}
export default App;
