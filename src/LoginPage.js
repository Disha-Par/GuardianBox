import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        loginData
      );

      alert(`Welcome ${response.data.user.name}!`);

      localStorage.setItem(
        "guardianUser",
        JSON.stringify(response.data.user)
      );

      navigate("/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>🔐 GuardianBox</h1>

        <h2>Welcome Back</h2>

        <p>Secure access to your files.</p>

        <input
          type="email"
          placeholder="Email"
          value={loginData.email}
          onChange={(e) =>
            setLoginData({
              ...loginData,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({
              ...loginData,
              password: e.target.value,
            })
          }
        />

        <button
          className="upload-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <p style={{ marginTop: "20px" }}>
          Don't have an account?
        </p>

        <Link to="/register">
          <button className="hero-login-btn">
            Create Account
          </button>
        </Link>

      </div>

    </div>
  );
}

export default LoginPage;