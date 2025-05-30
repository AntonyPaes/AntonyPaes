import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TelaLogin.css";

const TelaLogin = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setError("");
    setSuccess("");
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }, [isLogin]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      if (isLogin) {
        if (!formData.email || !formData.password) {
          throw new Error("Por favor, preencha todos os campos");
        }

        if (!validateEmail(formData.email)) {
          throw new Error("Por favor, insira um e-mail válido");
        }

        await new Promise((resolve) => setTimeout(resolve, 1500));

        setSuccess("Login realizado com sucesso!");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", formData.email);

        navigate("/produtos");
      } else {
        if (
          !formData.name ||
          !formData.email ||
          !formData.password ||
          !formData.confirmPassword
        ) {
          throw new Error("Por favor, preencha todos os campos");
        }

        if (!validateEmail(formData.email)) {
          throw new Error("Por favor, insira um e-mail válido");
        }

        if (formData.password !== formData.confirmPassword) {
          throw new Error("As senhas não coincidem");
        }

        if (formData.password.length < 6) {
          throw new Error("A senha deve ter pelo menos 6 caracteres");
        }

        await new Promise((resolve) => setTimeout(resolve, 1500));

        setSuccess(
          "Cadastro realizado com sucesso! Redirecionando para login..."
        );
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-container">
      <img src="public/image/Fiat_logo.png" alt="Logo Fiat" />
      <div className="form-container">
        <div className="form-header">
          <h1 className="form-title">{isLogin ? "Login" : "Cadastro"}</h1>
          <p className="form-subtitle">
            {isLogin ? "Acesse sua conta" : "Crie sua nova conta"}
          </p>
        </div>

        {error && (
          <div className="error-message">
            <span>⚠️</span> {error}
          </div>
        )}

        {success && (
          <div className="success-message">
            <span>✓</span> {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Nome completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Digite seu nome"
                disabled={isLoading}
              />
            </div>
          )}

          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="seu@email.com"
              disabled={isLoading}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              placeholder={isLogin ? "Digite sua senha" : "Crie uma senha"}
              disabled={isLoading}
            />
          </div>

          {!isLogin && (
            <div className="form-group">
              <label className="form-label" htmlFor="confirmPassword">
                Confirmar senha
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-input"
                placeholder="Confirme sua senha"
                disabled={isLoading}
              />
            </div>
          )}

          <button
            type="submit"
            className={`submit-button ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="spinner"></span>
            ) : isLogin ? (
              "Entrar"
            ) : (
              "Cadastrar"
            )}
          </button>
        </form>

        <div className="form-footer">
          <button
            type="button"
            onClick={toggleForm}
            className="toggle-button"
            disabled={isLoading}
          >
            {isLogin
              ? "Não tem uma conta? Cadastre-se"
              : "Já tem uma conta? Faça login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TelaLogin;
