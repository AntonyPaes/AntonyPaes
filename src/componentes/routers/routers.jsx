import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../../pages/login";
import SignUp from "../../pages/signUp/index";
import Home from "../../pages/home/index";
import Dashboard from "../../pages/admin/dashboard";
import CriaProduto from "../../pages/criarProdutos/criarProd";
import ListaProdutos from "../../pages/lerProdutos/lerProd";
import EditaProduto from "../../pages/atualizaProdutos/atualizar";
import RemoveProduto from "../../pages/removeProdutos/removeProd";

export default function Routers() {
  return (
    <Routes>
      
      <Route path="/" element={<Login />} />  
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/adicionaProduto" element={<CriaProduto />} />
      <Route path="/listagemProdutos" element={<ListaProdutos />} />
      <Route path="/editaProduto" element={<EditaProduto />} />
      <Route path="/removeProduto" element={<RemoveProduto />} />
      

    </Routes>
  );
}
