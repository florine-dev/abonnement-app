import { useMutation } from "@tanstack/react-query";
import api, { http } from "../config/axios.config";

interface LoginProps {
  email: string;
  password: string;
}
export interface SignupProps {
  email: string;
  password: string;
  address: string;
  phone: string;
  name: string;
}

const login = async (data: LoginProps) => {
  try {
    const result = await http.post<{ access_token: string }>(
      "/auth/login",
      data
    );

    return result.data;
  } catch (error) {
    throw error;
  }
};

export const useLogin = () =>
  useMutation({
    mutationFn: (data: LoginProps) => login(data),
  });

const signup = async (data: SignupProps) => {
  try {
    const result = await http.post<{ access_token: string }>(
      "/auth/signup",
      data
    );
    return result.data;
  } catch (error) {
    throw error;
  }
};
export const useSignup = () =>
  useMutation({ mutationFn: (data: SignupProps) => signup(data) });
