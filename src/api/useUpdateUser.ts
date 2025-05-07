import { useMutation, useQueryClient } from "@tanstack/react-query";
import api, { http } from "../config/axios.config";

export interface UpdateUserProps {
  name: string;
  email: string;
  phone: string;
  password?: string;
  address?: string; // Add address to the interface
}

const updateUser = async (data: UpdateUserProps, id: number) => {
  const res = await api.put(`/user/update/${id}`, data);
  return res.data;
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { userProps: UpdateUserProps; id: number }) =>
      updateUser(data.userProps, data.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};
