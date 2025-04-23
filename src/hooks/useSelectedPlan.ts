import { atom, useAtom, useSetAtom } from "jotai";
import { SubscriptionPlanProps } from "../api/plan";

const selectedPlan = atom<Omit<SubscriptionPlanProps, "billingCycle">>();

export const useSelectedPlan = () => useAtom(selectedPlan);

export const useSetSelectedPlan = () => useSetAtom(selectedPlan);
