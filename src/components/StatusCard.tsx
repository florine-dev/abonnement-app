// src/components/StatusCard.tsx
import React from "react";

interface StatusCardProps {
  label: string;
  value: string;
}

const StatusCard: React.FC<StatusCardProps> = ({ label, value }) => (
  <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
    <p className="text-sm text-gray-600 dark:text-green-200">{label}</p>
    <p className="text-lg font-semibold text-green-800 dark:text-green-100">
      {value}
    </p>
  </div>
);

export default StatusCard;
