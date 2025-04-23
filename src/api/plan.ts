import { useMutation, useQuery } from "@tanstack/react-query";
import api, { http } from "../config/axios.config";
import { data } from "react-router-dom";

export interface SubscriptionPlanProps {
  id: number;
  name: string;
  price: number;
  billingCycle: string;
  features: string[];
}
export interface InitPaymentProps {
  url: string;
}

export const planQueryKeys = {
  all: ["ALL_SUBSCRIPTIONS"],
};

const getPlans = async () => {
  try {
    const results = await http.get<SubscriptionPlanProps[]>(
      "/subscription-plan"
    );

    return results.data;
  } catch (error) {
    throw error;
  }
};

export const useGetSubscriptionPlans = () =>
  useQuery({
    queryKey: planQueryKeys.all,
    queryFn: getPlans,
  });

const initPayment = async (planId: number) => {
  try {
    const result = await api.post<{ url: string }>(
      `/subscription/${planId}/create-checkout-session`
    );
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const useInitPayment = () =>
  useMutation({ mutationFn: (planId: number) => initPayment(planId) });
