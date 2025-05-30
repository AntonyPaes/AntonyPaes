<<<<<<< HEAD
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import "./App.css";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="app-layout">
      {isLoggedIn && (
        <div className="sidebar">
          <h2>Peças</h2>
          <nav>
            <ul>
              <li>
                <Link
                  to="/produtos"
                  className={location.pathname === "/produtos" ? "active" : ""}
                >
                  Ver Peças
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/produtos"
                  className={
                    location.pathname.includes("/dashboard/produtos")
                      ? "active"
                      : ""
                  }
                >
                  Gerenciar Peças
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/criar"
                  className={
                    location.pathname.includes("/dashboard/criar")
                      ? "active"
                      : ""
                  }
                >
                  Criar Peças
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="logout-button">
                  Sair
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import Routers from "./componentes/routers/routers";
import { StrictMode } from 'react';
import { BrowserRouter } from "react-router-dom";

function App() {

  
  return (
    <StrictMode>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </StrictMode>
  );
}

export default App;
>>>>>>> 477aebd7f1a136be270118f36fd7caa396abad16
