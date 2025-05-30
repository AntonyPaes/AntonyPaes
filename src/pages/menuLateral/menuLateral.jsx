import "./style.css";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function MenuLateral() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#fefefe",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    p: 4,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  };

  return (
    <div className="menuLateral">
      <div className="perfil">
        <div className="fotoUsuario">
          <img 
          src="/images/logo_ecomerce.jpeg" 
          alt="logo E-Commerce"
          />
          
        </div>
        <h3>E-Commerce</h3>
      </div>

      <div className="menuOpcoes">
        <button>⚙️ Configurações</button>
        <button>📊 Estatísticas</button>

        <button id="sairButton" onClick={handleOpen}>
          🔒 Sair
        </button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ fontWeight: "bold" }}
            >
              Encerrar Sessão
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ fontSize: "16px", color: "#555" }}
            >
              Tem certeza de que deseja sair? Você precisará fazer login
              novamente para acessar o sistema.
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
              }}
            >
              <button
                onClick={handleClose}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#ccc",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "background 0.2s",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#bbb")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#ccc")}
              >
                Cancelar
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#e53935",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "background 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#d32f2f")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#e53935")}
              >
                Sair
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
