import { useState, useEffect } from "react";
import "./ModalProduto.css";

export default function ModalProduto({
  aberto,
  onClose,
  onSalvar,
  produtoSelecionado,
}) {
  const [produto, setProduto] = useState({
    nome: "",
    valor: "",
    imagem: "",
  });

  const [imagemValida, setImagemValida] = useState(true);

  useEffect(() => {
    if (produtoSelecionado) {
      setProduto({
        nome: produtoSelecionado.nome || "",
        valor: produtoSelecionado.valor || "",
        imagem: produtoSelecionado.imagem || "",
        id: produtoSelecionado.id || undefined,
      });
    } else {
      setProduto({ nome: "", valor: "", imagem: "" });
    }
  }, [produtoSelecionado]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto((prev) => ({ ...prev, [name]: value }));

    if (name === "imagem") {
      setImagemValida(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!produto.nome.trim() || !produto.valor || !produto.imagem.trim()) {
      alert("Preencha todos os campos.");
      return;
    }

    const valorNumerico = parseFloat(produto.valor);
    if (isNaN(valorNumerico) || valorNumerico <= 0) {
      alert("Informe um valor numérico válido.");
      return;
    }

    const produtoFinal = {
      ...produto,
      valor: valorNumerico,
    };

    onSalvar(produtoFinal);
  };

  const handleClickFora = (e) => {
    if (e.target.className === "modal-overlay") {
      onClose();
    }
  };

  if (!aberto) return null;

  return (
    <div className="modal-overlay" onClick={handleClickFora}>
      <div className="modal-content">
        <h2>{produto.id ? "Editar Produto" : "Nova peça"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="nome"
            value={produto.nome}
            onChange={handleChange}
            placeholder="Nome da peça"
            maxLength={50}
            required
          />
          <input
            name="valor"
            value={produto.valor}
            onChange={handleChange}
            placeholder="Valor"
            type="number"
            min="0.01"
            step="0.01"
            required
          />
          <input
            name="imagem"
            value={produto.imagem}
            onChange={handleChange}
            placeholder="URL da imagem"
            required
          />

          {produto.imagem && imagemValida ? (
            <img
              src={produto.imagem}
              alt="Pré-visualização"
              className="preview-img"
              onError={() => setImagemValida(false)}
            />
          ) : produto.imagem && !imagemValida ? (
            <p className="erro-img">
              ⚠️ Não foi possível carregar a imagem. Verifique a URL.
            </p>
          ) : null}

          <div className="botoes">
            <button type="submit" className="salvar">
              Salvar
            </button>
            <button type="button" className="cancelar" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
