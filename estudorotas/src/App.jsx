import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Paginas/Home";
import SaoPaulo from "./Paginas/SaoPaulo";
import RiodeJaneiro from "./Paginas/RiodeJaneiro";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import MinasGerais from "./Paginas/MinasGerais";
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
      </Routes>
      </BrowserRouter>
    );
}