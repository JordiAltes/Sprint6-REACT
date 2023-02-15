import React from "react";
import { useState } from "react";
import Escena from "./components/Escena.jsx";
import frases from "./components/frases";
import { Welcome } from "./components/Welcome.jsx";

function App() {
  const [position, setPosition] = useState(1);
  function ActiveNext() {
    setPosition(position >= frases.length ? 1 : position + 1);
  }
  function ActiveBack() {
    setPosition(position <= 1 ? frases.length : position - 1);
  }

  const [welcomePage, setPage] = useState(true);
  const nextPage = () => {
    setPage(false);
  };

  return welcomePage === true ? (
    <Welcome següent={nextPage} />
  ) : (
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
          image={item.img}
        />
      ))}
    </div>
  );
}
export default App;
