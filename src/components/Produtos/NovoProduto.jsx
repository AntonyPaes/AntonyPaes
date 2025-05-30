import ModalProduto from "./ModalProduto";
export default function NovoProduto() {
  const API_URL = "http://localhost:3000/produtos";

  const salvarProduto = (produto) => {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao salvar");
        }
        return res.json();
      })
      .then(() => {
        window.history.back();
      })
      .catch(() => alert("Erro ao salvar o produto"));
  };

  return (
    <ModalProduto
      aberto={true}
      onClose={() => window.history.back()}
      produtoSelecionado={null}
      onSalvar={salvarProduto}
    />
  );
}
