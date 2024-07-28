import { api } from "configs/AxiosConfig";
import { BASE_URL } from "constants/endpoint";

export const useRegisterAccount = async (data) => {
  try {
    const response = await api.post(`${BASE_URL}/auth/signUp`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const useSignInAccount = async (data) => {
  try {
    const response = await api.post(`${BASE_URL}/auth/signIn`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const useSignInEmployee = async (data) => {
  try {
    const response = await api.post(`${BASE_URL}/auth/signIn`, data);
    if (response.data.role === "USER") {
      throw new Error("You do not have permission to access admin page");
    } else {
      return response.data;
    }
  } catch (error) {
    throw error;
  }
};
