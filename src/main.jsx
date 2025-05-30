import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./App";
import "./index.css";

import TelaLogin from "./TelaLogin";
import Produtos from "./components/Produtos/Produtos";
import PrivateRoute from "./PrivateRoute";
import DashboardProdutos from "./pages/DashboardProdutos";
import CriarProduto from "./pages/CriarProduto";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <Navigate
                to={
                  localStorage.getItem("isLoggedIn") === "true"
                    ? "/produtos"
                    : "/login"
                }
                replace
              />
            }
          />

          <Route path="produtos" element={<Produtos />} />

          <Route
            path="dashboard/produtos"
            element={
              <PrivateRoute>
                <DashboardProdutos />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard/criar"
            element={
              <PrivateRoute>
                <CriarProduto />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
=======
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
>>>>>>> 477aebd7f1a136be270118f36fd7caa396abad16
  </React.StrictMode>
);
