import { useNavigate } from "react-router-dom";
import ModalProduto from "../components/Produtos/ModalProduto";

export default function CriarProduto() {
  const navigate = useNavigate();

  const salvarProduto = async (produto) => {
    try {
      const response = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto),
      });

      if (!response.ok) throw new Error("Erro ao criar produto");
      navigate("/dashboard/produtos");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ModalProduto
      aberto={true}
      onClose={() => navigate("/dashboard/produtos")}
      produtoSelecionado={null}
      onSalvar={salvarProduto}
    />
  );
}
