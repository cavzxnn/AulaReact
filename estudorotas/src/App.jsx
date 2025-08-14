import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Paginas/Home";

import SaoPaulo from "./Paginas/SaoPaulo";

import RiodeJaneiro from "./Paginas/RiodeJaneiro";

import EspiritoSanto from "./Paginas/EspiritoSanto";

import MinasGerais from "./Paginas/MinasGerais";

import RioGrandedoSul from "./Paginas/RioGrandedoSul";

import Parana from "./Paginas/Parana";

import SantaCatarina from "./Paginas/SantaCatarina";

import MatoGrosso from "./Paginas/MatoGrosso";

import MatoGrossoSul from "./Paginas/MatoGrossoSul";

import Goias from "./Paginas/Goias";

import Bahia from "./Paginas/Bahia";

import Alagoas from "./Paginas/Alagoas";

import Sergipe from "./Paginas/Sergipe";

import Paraiba from "./Paginas/Paraiba";

import Pernambuco from "./Paginas/Pernambuco";

import RioGrandeNorte from "./Paginas/RioGrandeNorte";

import Ceara from "./Paginas/Ceara";

import Piaui from "./Paginas/Piaui";

import Maranhao from "./Paginas/Maranhao";


import Amazonia from "./Paginas/Amazonas";

import Roraima from "./Paginas/Roraima";

import Amapa from "./Paginas/Amapa";

import Para from "./Paginas/Para";

import Tocantins from "./Paginas/Tocantins";

import Rondonia from "./Paginas/Rondonia";

import Acre from "./Paginas/Acre";


import  "./App.css";

export default function App()
{
    return (
      <BrowserRouter>
      <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/sp" element={<SaoPaulo/>} />
     <Route path="/rj" element={<RiodeJaneiro/>} />
     <Route path="/MG" element={<MinasGerais/>} />
     <Route path="/ES" element={<EspiritoSanto/>} />
     <Route path="/RS" element={<RioGrandedoSul/>} />
     <Route path="/SC" element={<SantaCatarina/>} />
     <Route path="/PR" element={<Parana/>} />
     <Route path="/MT" element={<MatoGrosso/>} />
     <Route path="/MS" element={<MatoGrossoSul/>} />
     <Route path="/GO" element={<Goias/>} />

     <Route path="/MA" element={<Maranhao/>} />
     <Route path="/PI" element={<Piaui/>} />
     <Route path="/CE" element={<Ceara/>} />
     <Route path="/RN" element={<RioGrandeNorte/>} />
     <Route path="/PE" element={<Pernambuco/>} />
     <Route path="/PB" element={<Paraiba/>} />
     <Route path="/SE" element={<Sergipe/>} />
     <Route path="/AL" element={<Alagoas/>} />
     <Route path="/BA" element={<Bahia/>} />

     <Route path="/AM" element={<Amazonia/>} />
     <Route path="/RR" element={<Roraima/>} />
     <Route path="/AP" element={<Amapa/>} />
     <Route path="/PA" element={<Para/>} />
     <Route path="/TO" element={<Tocantins/>} />
     <Route path="/RO" element={<Rondonia/>} />
     <Route path="/AC" element={<Acre/>} />
      </Routes>
      </BrowserRouter>
    );
}