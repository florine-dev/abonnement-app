import React, { useEffect, useState } from "react";
import { useUser } from "../api/useUser";
import InfoCard from "../components/InfoCard";
import { useStatusPayement } from "../api/useStatusPayement";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const { data: user, isLoading: loadingUser, isError: errorUser } = useUser();
  const {
    data: subscription,
    isLoading: loadingSubscription,
    refetch: refetchSubscription,
  } = useStatusPayement();

  const handleCancelSubscription = async () => {
    // 1. Demande de confirmation
    const ok = window.confirm(
      "Êtes-vous sûr de vouloir annuler votre abonnement ?"
    );
    if (!ok) return; // l’utilisateur a cliqué sur "Annuler"

    // 2. Appel API pour annuler
    try {
      const res = await fetch("http://localhost:3000/subscription/cancel", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!res.ok) throw new Error(await res.text());
      const { message } = await res.json();
      alert(message);
      refetchSubscription(); // rafraîchir les données
    } catch (err) {
      console.error("Erreur annulation :", err);
      alert("Impossible d’annuler l’abonnement");
    }
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/confirm-plan");
  };

  if (loadingUser || loadingSubscription) return <p>Chargement...</p>;
  if (errorUser || !user) return <p>Erreur lors du chargement des données.</p>;

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard label="Nom" value={user.name} />
            <InfoCard label="Téléphone" value={user.phone} />
            <InfoCard label="Email" value={user.email} />
            <InfoCard
              label="Date d'inscription"
              value={new Date(user.createdAt).toLocaleDateString()}
            />
          </div>
        </div>

        {/* Statut de l'abonnement */}
        <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Statut de l'Abonnement
          </h2>

          {subscription && subscription.isActive ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                className={`p-4 rounded-lg shadow text-white ${
                  subscription ? "bg-green-600" : "bg-red-600"
                }`}
              >
                <div className="text-sm font-medium">Offre</div>
                <div className="text-lg font-semibold">
                  {subscription.planName}
                </div>
              </div>

              <InfoCard
                label="Début"
                value={new Date(subscription.startDate).toLocaleDateString()}
              />
              <InfoCard
                label="Fin"
                value={new Date(subscription.endDate).toLocaleDateString()}
              />
            </div>
          ) : (
            <div className="p-4 rounded-lg shadow bg-red-600 text-white">
              Aucun abonnement en cours.
            </div>
          )}
        </div>

        {/* Actions possibles */}
        <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Actions possibles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <button
              onClick={handleClick}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-200"
            >
              {subscription && subscription.isActive
                ? "Changer l'abonnement"
                : "Souscrire à un abonnement"}
            </button>

            {subscription && subscription.isActive && (
              <button
                onClick={handleCancelSubscription}
                className="bg-red-600 text-white p-4 rounded-lg hover:bg-red-700"
              >
                Annuler l'abonnement
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
