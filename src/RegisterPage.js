import React from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Name"
          className="input-field"
        />

        <input
          type="email"
          placeholder="Email"
          className="input-field"
        />

        <input
          type="password"
          placeholder="Password"
          className="input-field"
        />

        <button className="upload-btn">
          Register
        </button>

        <br />
        <br />

        <Link to="/login">
          <button className="hero-login-btn">
            Back to Login
          </button>
        </Link>

      </div>
    </div>
  );
}

export default RegisterPage;