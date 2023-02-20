import React from "react";
import { useState } from "react";
import Escena from "./components/Escena.jsx";
import frases from "./components/frases";
import { Welcome } from "./components/Welcome.jsx";
import { ShowImage } from "./components/Escena.jsx";
import { Button, ContainerButton } from "./styled.js";

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
      <ContainerButton>
        <Button onClick={() => ActiveBack()}>Anterior</Button>
        <Button onClick={() => ActiveNext()}>Següent</Button>
      </ContainerButton>

      {frases.map((item) => (
        <Escena
          key={item.id}
          id={item.id}
          frase={item.text}
          isPainted={position === item.id}
          imatgeFondo={item.img}
          position={position}
        />
      ))}
      <ShowImage />
    </div>
  );
}
export default App;
