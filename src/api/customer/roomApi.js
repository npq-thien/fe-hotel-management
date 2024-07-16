import { api } from "configs/AxiosConfig";
import { BASE_URL } from "constants/endpoint";

export const useGetAllRooms = async () => {
  const simulateDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  try {
    await simulateDelay(2000); // Simulate a 2-second delay
    const response = await api.get(`${BASE_URL}/room/type`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
