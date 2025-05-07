import api from "../config/axios.config";

export const getPaymentHistory = async () => {
  try {
    const response = await api.get("/payment/history");
    return response.data;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération de l'historique des paiements :",
      error
    );
    throw error;
  }
};
