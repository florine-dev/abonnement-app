// src/components/Dashboard.tsx
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Tableau de bord
        </h1>

        {/* Résumé du profil utilisateur */}
        <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Résumé du Profil
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-300">Nom</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                John Doe
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-300">Email</p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                john.doe@mail.com
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Date d'inscription
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                01 Janvier 2023
              </p>
            </div>
          </div>
        </div>

        {/* Statut de l'abonnement */}
        <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Statut de l'Abonnement
          </h2>
          <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Abonnement
            </p>
            <p className="text-lg font-semibold text-green-800 dark:text-green-200">
              Actif
            </p>
          </div>
        </div>

        {/* Actions possibles */}
        <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Actions possibles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <button className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700">
              Changer d'offre
            </button>
            <button className="bg-red-600 text-white p-4 rounded-lg hover:bg-red-700">
              Annuler l'abonnement
            </button>
            <button className="bg-yellow-600 text-white p-4 rounded-lg hover:bg-yellow-700">
              Mettre à jour les informations de paiement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
