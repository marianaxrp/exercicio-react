// import PrimeiroComponente from "./components/PrimeiroComponente";
// import { CompA, CompB } from './components/DoisComponentes';
// import MultiElementos from "./components/MultiElementos";
import React from "react";
import ReactDOM from "react-dom";
/* import FamiliaSilva from "./components/FamiliaSilva"; */
/* import Membro from "./components/Membro";
import Familia from "./components/Familia"; */
/* import ComponenteComFuncao from "./components/ComponenteComFuncao"; */
/* import Pai from "./components/Pai"; */
/* import ComponenteClasse from "./components/ComponenteClasse"; */
/* import Contador from "./components/Contador"; */
import Hook from "./components/Hook";

const elemento = document.getElementById("root");
ReactDOM.render(
  <div>
    <Hook />
    {/* <Contador numero={0} /> */}
    {/* <ComponenteClasse valor="Sou um componente de classe" /> */}
    {/* <Pai /> */}
    {/* <ComponenteComFuncao></ComponenteComFuncao> */}
    {/* <Familia sobrenome="Pereira">
      <Membro nome="Andre" />
      <Membro nome="Mariana" />
    </Familia>
 */}
    {/* <FamiliaSilva sobrenome="Silva" /> */}
    {/* <MultiElementos /> */}
    {/* <CompA valor="oi" />
    <CompB valor="lala" /> */}
    {/* <PrimeiroComponente valor="Bom dia" aBcD={Math.pow(2, 8)} />} */}
  </div>,
  elemento
);
