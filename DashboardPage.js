import React from "react";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const user = JSON.parse(localStorage.getItem("guardianUser"));
const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>🛡 GuardianBox Dashboard</h1>

        <h2>Welcome, {user?.name}</h2>

        <p>Manage and share your files securely.</p>

        <button
  className="upload-btn"
  onClick={() => navigate("/upload")}
>
  📁 Upload New File
</button>
        <button
  className="hero-login-btn"
  onClick={() => navigate("/myfiles")}
>
  📂 My Files
</button>

        <button
  className="hero-login-btn"
  onClick={() => {
    localStorage.removeItem("guardianUser");
    navigate("/login");
  }}
>
  🚪 Logout
</button>
      </div>
    </div>
  );
}

export default DashboardPage;