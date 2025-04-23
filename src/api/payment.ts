import { useQuery } from "@tanstack/react-query";
import api from "../config/axios.config";

export const paymentQueryKeys = {
  all: ["GET_ALL_PAYMENTS"],
  getStatus: (id: string) => [...paymentQueryKeys.all, id],
};

const checkPaymentStatus = async (stripeId: string) => {
  try {
    const result = await api.get<{ paid: boolean }>(
      `/payment/${stripeId}/check-payment-status`
    );

    return result.data;
  } catch (error) {
    throw error;
  }
};

export const useGetPaymentStatus = (stripeId: string) =>
  useQuery({
    queryKey: paymentQueryKeys.getStatus(stripeId),
    queryFn: () => checkPaymentStatus(stripeId),
    enabled: !!stripeId,
    refetchInterval: 6000,
  });
