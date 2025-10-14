import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful ✅");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed ❌");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <form onSubmit={handleLogin} style={{ width: "300px" }}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", margin: "5px 0", padding: "8px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", margin: "5px 0", padding: "8px" }}
        />
        <button type="submit" style={{ width: "100%", padding: "8px", marginTop: "10px" }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
