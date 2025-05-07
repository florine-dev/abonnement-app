import React from "react";

interface InfoCardProps {
  label: string;
  value: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ label, value }) => (
  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
    <p className="text-sm text-gray-500 dark:text-gray-300">{label}</p>
    <p className="text-lg font-semibold text-gray-900 dark:text-white">
      {value}
    </p>
  </div>
);

export default InfoCard;
