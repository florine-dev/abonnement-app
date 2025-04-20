import React from "react";

function Setting() {
  return (
    <div>
      {/* Mise à jour des données personnelles */}
      <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Mise à jour des données personnelles
        </h2>
        <form action="#" method="POST">
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Nom complet
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="mt-1 w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              defaultValue="John Doe"
              required
            />
          </div>
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
              defaultValue="john.doe@mail.com"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Mettre à jour
          </button>
        </form>
      </div>
    </div>
  );
}

export default Setting;
