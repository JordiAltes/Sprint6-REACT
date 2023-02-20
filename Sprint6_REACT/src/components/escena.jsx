import React from "react";
import clsx from "clsx";
import { Container } from "../styled";

const Escena = ({ frase, isPainted }) => {
  return (
    <div className={clsx("frase", isPainted && "frase-pintada")}>{frase}</div>
  );
};

export default Escena;

export function ShowImage({ position, id, imatgeFondo }) {
  return (
    <Container active={position === id ? true : false}>
      {" "}
      {imatgeFondo}
    </Container>
  );
}
