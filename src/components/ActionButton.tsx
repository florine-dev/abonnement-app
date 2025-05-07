// src/components/ActionButton.tsx
import React from "react";

interface ActionButtonProps {
  color: "blue" | "red" | "yellow";
  label: string;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  color,
  label,
  onClick,
}) => {
  const colors = {
    blue: "bg-blue-600 hover:bg-blue-700",
    red: "bg-red-600 hover:bg-red-700",
    yellow: "bg-yellow-500 hover:bg-yellow-600 text-black",
  };

  return (
    <button
      onClick={onClick}
      className={`${colors[color]} text-white font-semibold py-2 px-4 rounded-lg transition duration-200`}
    >
      {label}
    </button>
  );
};

export default ActionButton;
