import React from "react";

export const Welcome = ({ següent }) => {
  return (
    <div className="welcomePage">
      <h1 className="titolBenvinguda">
        Benvingut a la història del nostre heroi
      </h1>
      <h4 className="textBenvinguda">
        Apreta el botó començar per poder interactuar amb les frases d'aquesta
        història amb els botons d'anterior i següent
      </h4>
      <button onClick={següent} className="botoBenviguda">
        COMENÇAR
      </button>
    </div>
  );
};
