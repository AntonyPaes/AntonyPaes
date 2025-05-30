import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./criaProd.css";

export default function CriarProd() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: '',
    url: '',
    preco: '',
  });

  const userDados = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const realizaCadastro = (e) => {
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
    navigate("/home");
  };

  return (
    <div className='cadastroProduto'>
      
      <div className='formContainer'>
        
        
        <h1 className='tituloCadastro'>Cadastro de Produto</h1>
        <form onSubmit={realizaCadastro} className='formulario'>
          
          <div className='formGroup'>
            <label htmlFor="nome">Nome:</label>
            <input type="text" name="nome" value={form.nome} onChange={userDados} required />
          </div>

          <div className='formGroup'>
            <label htmlFor="preco">Preço:</label>
            <input type="number" name="preco" value={form.preco} onChange={userDados} required />
          </div>

          <div className='formGroup'>
            <label htmlFor="url">Url:</label>
            <input type="text" name="url" value={form.url} onChange={userDados} required />
          </div>

          <div className='botoesCadastro'>
            <button id='cadastro' type="submit">Cadastrar</button>
            <button id='cancela' type="button" onClick={() => navigate("/home")}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
