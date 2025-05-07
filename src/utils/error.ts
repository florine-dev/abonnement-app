import { AxiosError } from "axios";

export const extractErrorMessage = (error: AxiosError<{ message: string }>) => {
  return error?.response?.data?.message || error?.message;
};
