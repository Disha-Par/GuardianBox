import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import UploadPage from "./UploadPage";
import DashboardPage from "./DashboardPage";
import MyFilesPage from "./MyFilesPage";

function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">🔐 GuardianBox</div>

        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#upload">Upload</a></li>
          <li><a href="#support">Support</a></li>

          <li>
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
          </li>
        </ul>
      </nav>

      <section className="hero">
        <h1>🔐 GuardianBox</h1>

        <p>Secure • Share • Protect</p>

        <h3>
          Protect your important files with encrypted sharing
          and access them anytime, anywhere.
        </h3>

        <div className="hero-buttons">

          <Link to="/upload">
            <button className="upload-btn">
              Upload Files
            </button>
          </Link>

          <Link to="/login">
            <button className="hero-login-btn">
              Login
            </button>
          </Link>

        </div>
      </section>

      <section id="about" className="section">
        <h2>About GuardianBox</h2>

        <p>
          GuardianBox is a secure file sharing platform designed
          to help users upload, protect and share important
          documents safely.
        </p>

        <p>
          We combine authentication, protected links and
          cybersecurity principles to keep your files secure.
        </p>
      </section>

      <section id="services" className="section">
        <h2>Our Services</h2>

        <div className="service-grid">

          <div className="service-card">
            🔐 Secure File Sharing
          </div>

          <div className="service-card">
            📁 Upload and Manage Files
          </div>

          <div className="service-card">
            🔗 Generate Shareable Links
          </div>

          <div className="service-card">
            ⬇ One-Click Downloads
          </div>

          <div className="service-card">
            👤 User Authentication
          </div>

          <div className="service-card">
            🛡 Data Protection
          </div>

        </div>
      </section>

      <section id="upload" className="section">
        <h2>Upload Files</h2>

        <p>
          Upload your documents securely and generate
          shareable links instantly.
        </p>

        <Link to="/upload">
          <button className="upload-btn">
            Go to Upload
          </button>
        </Link>
      </section>

      <section id="support" className="section">
        <h2>Customer Support</h2>

        <p>📧 support@guardianbox.com</p>
        <p>📞 +91 XXXXX XXXXX</p>
        <p>💬 Live Chat Coming Soon</p>
      </section>

      <footer>
        © 2026 GuardianBox • Secure • Share • Protect
      </footer>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/register"
          element={<RegisterPage />}
        />

        <Route
          path="/upload"
          element={<UploadPage />}
        />

        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

        <Route
          path="/myfiles"
          element={<MyFilesPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;