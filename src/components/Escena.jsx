import React from "react";
import clsx from "clsx";

const Escena = ({ frase, isPainted }) => {
  return (
    <div className={clsx("frase", isPainted && "frase-pintada")}>{frase}</div>
  );
};

export default Escena;
