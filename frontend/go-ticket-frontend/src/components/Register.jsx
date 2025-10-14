import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }
    try {
      await api.post("/auth/register", { name, city, email, password });
      alert("Signup successful ✅ Please login");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.error || "Signup failed ❌");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <form onSubmit={handleRegister} style={{ width: "300px" }}>
        <h2>Signup</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: "100%", margin: "5px 0", padding: "8px" }}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          style={{ width: "100%", margin: "5px 0", padding: "8px" }}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={{ width: "100%", margin: "5px 0", padding: "8px" }}
        />
        <button type="submit" style={{ width: "100%", padding: "8px", marginTop: "10px" }}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Register;
