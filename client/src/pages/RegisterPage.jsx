import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";

import { registerUser } from "../services/authService";

const RegisterPage = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

      const data = await registerUser(formData);

      // SAVE TOKEN
      localStorage.setItem("token", data.token);

      // REDIRECT
      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Registration Failed");

    }

  };

  return (
    <AuthLayout>

      <div className="space-y-6">

        <div className="text-center">

          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Create Account
          </h1>

          <p className="text-slate-400 mt-2">
            Start tracking your applications smarter
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <div>

            <label className="block mb-2 text-sm text-slate-300">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full bg-slate-900/70 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-purple-400 transition"
            />

          </div>

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
              className="w-full bg-slate-900/70 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-purple-400 transition"
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
              placeholder="Create password"
              className="w-full bg-slate-900/70 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-purple-400 transition"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:opacity-90 transition rounded-xl py-3 font-semibold text-lg"
          >
            Register
          </button>

        </form>

        <p className="text-center text-slate-400">

          Already have an account?{" "}

          <Link
            to="/"
            className="text-purple-400 hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </AuthLayout>
  );
};

export default RegisterPage;