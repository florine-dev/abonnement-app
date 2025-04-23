// src/api/axios.ts
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

// Créer une instance axios
const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const http = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercepteur de requête (ajout de token)
api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("token"); // ou autre méthode de stockage

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Intercepteur de réponse (gestion d’erreurs globales)
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response) {
      // Erreurs spécifiques
      if (error.response.status === 401) {
        console.warn("Non autorisé : veuillez vous reconnecter.");
        // Redirection ou déconnexion par exemple
      }
      if (error.response.status === 403) {
        console.warn("Accès refusé.");
      }
    } else {
      console.error("Erreur réseau ou serveur injoignable");
    }

    return Promise.reject(error);
  }
);

export default api;
