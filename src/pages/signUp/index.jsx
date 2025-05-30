import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: ''
  });

  const userDados = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const realizaCadastro = (e) => {
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
    navigate("/");
  };

  return (
    
    <div className='signUpTela'>
      <div className='signUpContainer'>
        
        
        <h1 className='signUpTitulo'>Crie sua conta</h1>
        <form onSubmit={realizaCadastro} className='signUpForm'>
          <div className='signUpGroup'>
            <label>Nome completo:</label>
            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={userDados}
              required
            />
          </div>

          <div className='signUpGroup'>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={userDados}
              required
            />
          </div>

          <div className='signUpGroup'>
            <label>Telefone:</label>
            <input
              type="tel"
              name="telefone"
              pattern="[0-9]{11}"
              value={form.telefone}
              onChange={userDados}
              required
            />
          </div>

          <div className='signUpGroup'>
            <label>Senha:</label>
            <input
              type="password"
              name="senha"
              value={form.senha}
              onChange={userDados}
              required
            />
          </div>

          <div className='signUpButtons'>
            <button id='signUpCadastrar' type="submit">Cadastrar</button>
            <button id='signUpCancelar' type="button" onClick={() => navigate("/")}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
    
  );
}
