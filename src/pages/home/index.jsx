import React from "react";
import { useNavigate } from "react-router-dom";
import MenuLateral from "../menuLateral/menuLateral";

export default function index() {
  const navigate = useNavigate();

  return (
    <div className="d-flex">
      <MenuLateral />

      <div className="container mt-4" style={{ marginLeft: "250px" }}>
        <h2 className="mb-4 text-center">Gerenciamento de Produtos</h2>

        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <div className="card text-white bg-primary h-100">
              <div className="card-header">Criar Produto</div>
              <div className="card-body d-flex flex-column justify-content-between">
                <p className="card-text small">
                  Adicione novos produtos ao estoque.
                </p>
                <button
                  className="btn btn-light mt-auto"
                  onClick={() => navigate("/adicionaProduto")}
                >
                  Criar
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-white bg-success h-100">
              <div className="card-header">Listar Produtos</div>
              <div className="card-body d-flex flex-column justify-content-between">
                <p className="card-text small">
                  Veja todos os produtos cadastrados.
                </p>
                <button
                  className="btn btn-light mt-auto"
                  onClick={() => navigate("/listagemProdutos")}
                >
                  Ver
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-white bg-warning h-100">
              <div className="card-header">Editar Produto</div>
              <div className="card-body d-flex flex-column justify-content-between">
                <p className="card-text small">
                  Edite dados de um produto existente.
                </p>
                <button
                  className="btn btn-light mt-auto"
                  onClick={() => navigate("/editaProduto")}
                >
                  Editar
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-white bg-danger h-100">
              <div className="card-header">Remover Produto</div>
              <div className="card-body d-flex flex-column justify-content-between">
                <p className="card-text small">Remova um produto do sistema.</p>
                <button
                  className="btn btn-light mt-auto"
                  onClick={() => navigate("/removeProduto")}
                >
                  Remover
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
