import { useQuery } from "@tanstack/react-query";
import api, { http } from "../config/axios.config"; // ton instance axios

// TypeScript : modèle de ton utilisateur
export interface UserProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  role: string;
  subscription?: {
    id: number;
    isActive: boolean;
    subscriptionPlan: {
      name: string;
      price: number;
      duration: number;
    };
  };
}

// Fonction qui appelle ton backend
const fetchUser = async (): Promise<UserProps> => {
  const res = await api.get<UserProps>("/user/me");
  return res.data;
};

// Hook personnalisé que tu peux utiliser dans ton composant React
export const useUser = () => {
  return useQuery<UserProps>({
    queryKey: ["userMe"],
    queryFn: fetchUser,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
