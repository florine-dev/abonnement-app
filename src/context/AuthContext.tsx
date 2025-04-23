import React, { createContext, useContext, useState, useEffect } from "react";
import { SignupProps, useLogin, useSignup } from "../api/auth";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: SignupProps) => Promise<void>;
  logout: () => void;
  isLoggingIn: boolean;
  isSigningUp: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);

  const { mutateAsync: loginUser, isPending: isLoggingIn } = useLogin();

  const { mutateAsync: signupUser, isPending: isSigningUp } = useSignup();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const result = await loginUser({ email, password });

    setToken(result.access_token);
    localStorage.setItem("token", result.access_token);
  };

  const signup = async (data: SignupProps) => {
    const result = await signupUser(data);

    setToken(result.access_token);
    localStorage.setItem("token", result.access_token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ token, login, signup, logout, isLoggingIn, isSigningUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};
