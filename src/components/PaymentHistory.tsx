import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPaymentHistory } from "../api/payementService";

interface Payment {
  id: number;
  amount: number;
  currency: string;
  date: string;
  status: string;
  stripeId: string;
  subscription?: {
    subscriptionPlan?: {
      name: string;
    };
  };
}

const PaymentHistory = () => {
  const {
    data: payments = [],
    isLoading,
    error,
  } = useQuery<Payment[]>({
    queryKey: ["payment-history"],
    queryFn: getPaymentHistory,
  });

  if (isLoading) return <p>Chargement...</p>;

  if (error) {
    console.error("Erreur lors du chargement des paiements :", error);
    return <p>Erreur lors du chargement des paiements.</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Historique des paiements</h2>
      {payments.length === 0 ? (
        <p>Aucun paiement trouvé.</p>
      ) : (
        <table className="w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Montant</th>
              <th className="px-4 py-2">Devise</th>
              <th className="px-4 py-2">Statut</th>
              <th className="px-4 py-2">Plan</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.id} className="text-center border-t">
                <td className="px-4 py-2">
                  {new Date(p.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">{(p.amount / 100).toFixed(2)}</td>
                <td className="px-4 py-2">{p.currency.toUpperCase()}</td>
                <td className="px-4 py-2">{p.status}</td>
                <td className="px-4 py-2">
                  <p>{p.subscription?.subscriptionPlan?.name || "N/A"}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PaymentHistory;
