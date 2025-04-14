import React from "react";

const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Admin Dashboard
      </h1>

      {/* Section: User Management */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Users
        </h2>
        <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-md rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-200 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300 uppercase">
              <tr>
                <th scope="col" className="px-6 py-3">
                  User
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  John Doe
                </td>
                <td className="px-6 py-4">john@example.com</td>
                <td className="px-6 py-4">user</td>
                <td className="px-6 py-4 text-green-500">Active</td>
                <td className="px-6 py-4">
                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
              {/* Add more rows... */}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section: Subscription Stats */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Subscription Statistics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300">Active</p>
            <p className="text-2xl font-bold text-green-500">325</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300">Inactive</p>
            <p className="text-2xl font-bold text-red-500">89</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Cancelled
            </p>
            <p className="text-2xl font-bold text-yellow-500">42</p>
          </div>
        </div>
      </section>

      {/* Section: Payments */}
      <section>
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Transactions
        </h2>
        <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-md rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-200 dark:bg-gray-700 text-xs text-gray-700 dark:text-gray-300 uppercase">
              <tr>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">User</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4">2025-04-10</td>
                <td className="px-6 py-4">Jane Smith</td>
                <td className="px-6 py-4">$29.99</td>
                <td className="px-6 py-4 text-green-500">Success</td>
              </tr>
              {/* More rows */}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
