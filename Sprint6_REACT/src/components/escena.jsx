import React from "react";
import "../index.css"

export default function Escena(props) {
    return (
        <div className="frase">
            {props.frase}
        </div>
    )
}
