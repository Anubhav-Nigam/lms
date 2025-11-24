import { useState, useContext } from "react";
import api from "../api/axiosInstance";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", { email, password });
      login(res.data.token, res.data.user);
      alert("Logged in");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Login</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm">
        <input
          type="email"
          placeholder="Email"
          className="border p-2"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>
      <p style={{ marginTop: "20px" }}>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
}
