import { useQuery } from "@tanstack/react-query";
import api, { http } from "../config/axios.config"; // on n’utilise plus 'api'

export interface StatusPayementProps {
  id: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  planName: string;
}

// Récupération de l'abonnement de l'utilisateur
const fetchSubscription = async (): Promise<StatusPayementProps | null> => {
  const { data } = await api.get<{ subscription: StatusPayementProps }>(
    "/subscription/me"
  );
  return data.subscription ?? null;
};

// Hook React Query
export const useStatusPayement = () => {
  return useQuery<StatusPayementProps | null, Error>({
    queryKey: ["subscription"],
    queryFn: fetchSubscription,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: false, // ou un nombre de tentatives
  });
};
