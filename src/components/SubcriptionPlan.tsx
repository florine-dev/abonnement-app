import React from "react";
import { Link } from "react-router-dom";

interface SubscriptionPlanProps {
  title: string;
  amount: number;
  features: string[];
  isPopular?: boolean;
}

const SubscriptionPlan: React.FC<SubscriptionPlanProps> = ({
  title,
  amount,
  features,
  isPopular = false,
}) => {
  return (
    <div
      className={`relative flex flex-col border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-lg transition-all w-full max-w-sm text-center ${
        isPopular ? "border-indigo-600 ring-2 ring-indigo-200" : ""
      }`}
    >
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-tr-2xl rounded-bl-2xl animate-pulse">
          Popular
        </div>
      )}

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>

      {/* Price */}
      <p className="text-3xl font-semibold text-indigo-600 mb-1">{amount} €</p>
      <p className="text-sm text-gray-500 mb-4">/ 3 months</p>

      {/* Subscribe Button */}
      <button
        aria-label={`Subscribe to ${title} plan`}
        className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition mb-5"
      >
        <Link to="/login">Subscribe</Link>
      </button>

      {/* Features List */}
      <ul className="space-y-2 text-sm text-gray-600 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-green-500 font-bold">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionPlan;
