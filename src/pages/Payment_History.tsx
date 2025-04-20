import React from "react";
import ReusableTable from "../components/ReusableTable";

function Payment_History() {
  return (
    <div>
      {" "}
      {/* Historique des paiements */}
      <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          Historique des Paiements
        </h2>
        <ReusableTable />
      </div>
    </div>
  );
}

export default Payment_History;
