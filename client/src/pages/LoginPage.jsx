import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";

import { loginUser } from "../services/authService";

const LoginPage = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const data = await loginUser(formData);

      // SAVE TOKEN
      localStorage.setItem("token", data.token);

      // REDIRECT
      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Invalid Credentials");

    }

  };

  return (
    <AuthLayout>

      <div className="space-y-6">

        <div className="text-center">

          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Welcome Back
          </h1>

          <p className="text-slate-400 mt-2">
            Login to manage your applications
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <div>

            <label className="block mb-2 text-sm text-slate-300">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full bg-slate-900/70 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 transition"
            />

          </div>

          <div>

            <label className="block mb-2 text-sm text-slate-300">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full bg-slate-900/70 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 transition"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition rounded-xl py-3 font-semibold text-lg"
          >
            Login
          </button>

        </form>

        <p className="text-center text-slate-400">

          Don’t have an account?{" "}

          <Link
            to="/register"
            className="text-cyan-400 hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </AuthLayout>
  );
};

export default LoginPage;