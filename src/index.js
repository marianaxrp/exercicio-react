import React from "react";
import ReactDOM from "react-dom";
// import PrimeiroComponente from "./components/PrimeiroComponente";
// import { CompA, CompB } from './components/DoisComponentes';
// import MultiElementos from "./components/MultiElementos";
import FamiliaSilva from './components/FamiliaSilva'

const elemento = document.getElementById("root");
ReactDOM.render(
  <div>
      <FamiliaSilva />
    {/* <MultiElementos /> */}
    {/* <CompA valor="oi" />
    <CompB valor="lala" /> */}
    {/* <PrimeiroComponente valor="Bom dia" aBcD={Math.pow(2, 8)} />} */}
  </div>,
  elemento
);
