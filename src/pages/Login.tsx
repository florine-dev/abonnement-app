// src/components/Auth/Login.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { extractErrorMessage } from "../utils/error";

interface LoginProps {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { login } = useAuth();

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<LoginProps>();

  const handleLogin = async (data: LoginProps) => {
    login(data.email, data.password)
      .then(() => {
        navigate("/Dashboard");
      })
      .catch((error) => {
        console.log(error?.response?.data);
        toast.error(extractErrorMessage(error));
      });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 p-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Se connecter
        </h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type={"email"}
              id="email"
              className="mt-1 w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="example@mail.com"
              required
              {...register("email", { required: "Email is required" })}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Mot de passe
            </label>
            <input
              type={"password"}
              id="password"
              className="mt-1 w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="********"
              required
              {...register("password", { required: "Password is required" })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Se connecter
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Mot de passe oublié ?{" "}
          <a
            href="/reset-password"
            className="text-blue-600 dark:text-blue-400"
          >
            Réinitialiser
          </a>
        </p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Pas encore de compte ?{" "}
          <Link to="/Signup" className="text-blue-600 dark:text-blue-400">
            S'inscrire
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
