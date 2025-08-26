import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./paginas/Home";

import OnePiece from "./Paginas/OnePiece";

import Yamada from "./Paginas/Yamada";

import Tomie from "./Paginas/Tomie";

import DanDan from "./Paginas/DanDan";

import  "./App.css";

export default function App()
{
    return (
      <BrowserRouter>
      <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/ON" element={<OnePiece/>} />
     <Route path="/YA" element={<Yamada/>} />
     <Route path="/TO" element={<Tomie/>} />
     <Route path="/DA" element={<DanDan/>} />
      </Routes>
      </BrowserRouter>
    );
}