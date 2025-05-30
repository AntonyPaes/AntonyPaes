import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DashboardAdmin() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Painel do Administrador</h2>

      <div className="row mb-4">
        <div className="col">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Usuários</div>
            <div className="card-body">
              <h5 className="card-title">120 cadastrados</h5>
              <p className="card-text">Gerencie os usuários do sistema.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Produtos</div>
            <div className="card-body">
              <h5 className="card-title">58 produtos</h5>
              <p className="card-text">Controle o estoque e cadastros.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-white bg-warning mb-3">
            <div className="card-header">Pedidos</div>
            <div className="card-body">
              <h5 className="card-title">23 pendentes</h5>
              <p className="card-text">Acompanhe os pedidos em andamento.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center mb-4">
        <div className="col">
          <button className="btn btn-outline-primary w-100">Gerenciar Usuários</button>
        </div>
        <div className="col">
          <button className="btn btn-outline-success w-100">Gerenciar Produtos</button>
        </div>
        <div className="col">
          <button className="btn btn-outline-warning w-100">Ver Pedidos</button>
        </div>
      </div>


      <div className="d-flex justify-content-center gap-3 mt-5">
        <button className="btn btn-secondary" onClick={() => navigate('/products')}>
          Ir para Produtos
        </button>
        <button className="btn btn-danger" onClick={() => navigate('/')}>
          Sair
        </button>
      </div>
    </div>
  );
}
