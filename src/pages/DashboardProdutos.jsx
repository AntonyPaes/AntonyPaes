import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalProduto from "../components/Produtos/ModalProduto";
import "../components/Produtos/Produtos.css";

export default function DashboardProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const API_URL = "http://localhost:3000/produtos";

  const carregarProdutos = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Erro ao carregar produtos");
      const data = await response.json();
      setProdutos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  const abrirModalEditar = (produto) => {
    setProdutoSelecionado(produto);
    setModalAberto(true);
  };

  const removerProduto = async (id) => {
    if (!window.confirm("Deseja realmente remover este produto?")) return;

    try {
      const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Erro ao remover produto");
      await carregarProdutos();
    } catch (err) {
      alert(err.message);
    }
  };

  const salvarProduto = async (produto) => {
    try {
      const metodo = produto.id ? "PUT" : "POST";
      const url = produto.id ? `${API_URL}/${produto.id}` : API_URL;

      const response = await fetch(url, {
        method: metodo,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto),
      });

      if (!response.ok)
        throw new Error(produto.id ? "Erro ao atualizar" : "Erro ao criar");

      await carregarProdutos();
      setModalAberto(false);
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <div className="loading">Carregando produtos...</div>;
  if (error) return <div className="error">Erro: {error}</div>;

  return (
    <div className="dashboard-produtos">
      <h1>Gerenciamento de Peças</h1>

      <div className="produtos-grid">
        {produtos.length === 0 ? (
          <div className="empty-state">
            <p>Nenhum produto cadastrado</p>
            <button
              onClick={() => navigate("/dashboard/criar")}
              className="btn-criar"
            >
              Criar Primeiro Produto
            </button>
          </div>
        ) : (
          produtos.map((produto) => (
            <div className="produto-card" key={produto.id}>
              <div className="produto-imagem-container">
                <img
                  src={produto.imagem || "/placeholder-produto.png"}
                  alt={produto.nome}
                  className="produto-imagem"
                  onError={(e) => {
                    e.target.src = "/placeholder-produto.png";
                  }}
                />
              </div>
              <div className="produto-info">
                <h3>{produto.nome}</h3>
                <p className="produto-preco">
                  R$ {produto.valor?.toFixed(2).replace(".", ",")}
                </p>
                <div className="produto-acoes">
                  <button
                    onClick={() => abrirModalEditar(produto)}
                    className="btn-editar"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => removerProduto(produto.id)}
                    className="btn-remover"
                  >
                    Remover
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <ModalProduto
        aberto={modalAberto}
        onClose={() => setModalAberto(false)}
        produtoSelecionado={produtoSelecionado}
        onSalvar={salvarProduto}
      />
    </div>
  );
}
