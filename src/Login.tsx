// src/components/Auth/Login.tsx
import React from "react";

const Login: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 p-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Se connecter
        </h1>
        <form action="#" method="POST">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="example@mail.com"
              required
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
              type="password"
              id="password"
              name="password"
              className="mt-1 w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="********"
              required
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
          <a href="/register" className="text-blue-600 dark:text-blue-400">
            S'inscrire
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
