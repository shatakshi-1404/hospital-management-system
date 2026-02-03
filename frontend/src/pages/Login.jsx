import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";  ✅  (this is correct)


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await API.post("/login", {
      email,
      password,
    });

    localStorage.setItem("token", res.data.token);
    navigate("/");
  } catch (error) {
    alert(
      error.response?.data?.message || "Login failed"
    );
    console.error(error);
  }
};


  return (
    <form onSubmit={handleSubmit}>
      {/* inputs */}
      <button type="submit">Login</button>
    </form>
  );
}


  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-600 to-blue-800">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Hospital Admin
        </h1>
        <p className="text-center text-slate-500 mb-8">
          Login to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@hospital.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-center text-slate-400 mt-6">
          © 2026 Hospital Management System
        </p>
      </div>
    </div>
  );
}
