import { api } from "configs/AxiosConfig";
import { BASE_URL } from "constants/endpoint";
import { QUERY_KEYS } from "libs/react-query/queryKey";
import { useQuery } from "react-query";

export const useGetAllRooms = async () => {
  const simulateDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  try {
    // await simulateDelay(2000); // Simulate a 2-second delay
    const response = await api.get(`${BASE_URL}/room/type`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const useGetRoomDetailById = (id) => {
  const fetchData = async () => {
    try {
      const response = await api.get(`${BASE_URL}/room/type/detail?id=${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return useQuery({
    queryKey: [QUERY_KEYS.GET_ROOM_BY_ID, id],
    queryFn: () => fetchData(),
    onError: (error) => {
      console.log('error', error)
    },
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
};
