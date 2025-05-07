import React from "react";
import api, { http } from "../config/axios.config";
import { useQuery } from "@tanstack/react-query";
export interface DashboardData {
  name: string;
  phone: string;
  email: string;
  subscriptionStatus: string;
  startDate: string;
  endDate: string;
  createdAt: string;
}

const fetchDashboard = async (): Promise<DashboardData> => {
  const result = await api.get<DashboardData>("/dashboard");
  return result.data;
};
export const useDashboard = () => {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboard,
  });
};
