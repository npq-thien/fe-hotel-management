import { api } from "configs/AxiosConfig";
import { BASE_URL } from "constants/endpoint";

export const useGetAllRooms = async () => {
  try {
    const response = await api.get(`${BASE_URL}/room/type`);
    return response.data
  } catch (error) {
    throw error;
  }
};
