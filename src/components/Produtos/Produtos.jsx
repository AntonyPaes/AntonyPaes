import React, { useState, useEffect } from "react";
import "./Produtos.css";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [totalItens, setTotalItens] = useState(0);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  const API_URL = "http://localhost:3000/produtos";

  const carregarProdutos = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error("Erro ao carregar produtos:", err));
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  const adicionarAoCarrinho = (produto) => {
    const itemExistente = carrinho.find(
      (item) => item.produto.id === produto.id
    );
    if (itemExistente) {
      const novoCarrinho = carrinho.map((item) =>
        item.produto.id === produto.id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      );
      setCarrinho(novoCarrinho);
    } else {
      setCarrinho([...carrinho, { produto, quantidade: 1 }]);
    }
    setTotalItens(totalItens + 1);
  };

  const removerDoCarrinho = (produtoId) => {
    const itemExistente = carrinho.find(
      (item) => item.produto.id === produtoId
    );
    if (itemExistente) {
      if (itemExistente.quantidade > 1) {
        const novoCarrinho = carrinho.map((item) =>
          item.produto.id === produtoId
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        );
        setCarrinho(novoCarrinho);
      } else {
        const novoCarrinho = carrinho.filter(
          (item) => item.produto.id !== produtoId
        );
        setCarrinho(novoCarrinho);
      }
      setTotalItens(totalItens - 1);
    }
  };

  const calcularTotal = () => {
    return carrinho.reduce(
      (total, item) => total + item.produto.valor * item.quantidade,
      0
    );
  };

  const toggleCarrinho = () => {
    setCarrinhoAberto(!carrinhoAberto);
  };

  return (
    <div
      className="produtos-container"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="produtos-grid">
        {produtos.map((produto) => (
          <div className="produto-card" key={produto.id}>
            <div className="produto-imagem-container">
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="produto-imagem"
                onError={(e) => {
                  e.target.src = "/placeholder-produto.png";
                }}
              />
            </div>
            <div className="produto-info">
              <h3>{produto.nome}</h3>
              <p className="produto-preco">R$ {produto.valor?.toFixed(2)}</p>
              <button
                className="botao-adicionar"
                onClick={() => adicionarAoCarrinho(produto)}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={`carrinho ${carrinhoAberto ? "aberto" : ""}`}>
        <div className="cabecalho-carrinho">
          <h2>
            Seu carrinho tem{" "}
            <span className="destaque">{totalItens} itens</span>
          </h2>
          <button className="botao-fechar" onClick={toggleCarrinho}>
            ×
          </button>
        </div>

        <div className="itens-carrinho">
          {carrinho.map((item, index) => (
            <div className="item-carrinho" key={index}>
              <div className="imagem-item">
                <img src={item.produto.imagem} alt={item.produto.nome} />
              </div>
              <div className="detalhes-item">
                <h3>{item.produto.nome}</h3>
                <p className="preco">R$ {item.produto.valor?.toFixed(2)}</p>
              </div>
              <div className="controle-quantidade">
                <button
                  className="botao-quantidade menos"
                  onClick={() => removerDoCarrinho(item.produto.id)}
                >
                  -
                </button>
                <span className="quantidade">{item.quantidade}</span>
                <button
                  className="botao-quantidade mais"
                  onClick={() => adicionarAoCarrinho(item.produto)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="rodape-carrinho">
          <div className="total">
            <span>Total:</span>
            <span className="valor-total">R$ {calcularTotal().toFixed(2)}</span>
          </div>
          <button className="finalizar-compra">Finalizar compra</button>
        </div>
      </div>

      {!carrinhoAberto && (
        <div className="carrinho-toggle" onClick={toggleCarrinho}>
          <span className="carrinho-icone">🛍️</span>
          <span className="carrinho-contador">{totalItens}</span>
        </div>
      )}
    </div>
  );
}
