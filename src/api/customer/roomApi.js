import { api } from "configs/AxiosConfig";
import { BASE_URL } from "constants/endpoint";
import { QUERY_KEYS } from "api/queryKey";
import { useMutation, useQuery } from "react-query";

export const useGetAllRooms = () => {
  const simulateDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const fetchData = async () => {
    try {
      // await simulateDelay(2000); // Simulate a 2-second delay
      const response = await api.get(`${BASE_URL}/room/type`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return useQuery({
    queryKey: [QUERY_KEYS.GET_ROOMS],
    queryFn: () => fetchData(),
    onError: (error) => {
      console.log("error", error);
    },
    refetchOnWindowFocus: false,
  });
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
      console.log("error", error);
    },
    refetchOnWindowFocus: false,
    enabled: !!id,
  });
};

export const useGetReviewsByRoomId = (roomId) => {
  const fetchData = async () => {
    try {
      const response = await api.get(`${BASE_URL}/room-review?roomTypeId=${roomId}`);
      return response.data;
    } catch (error) {
      console.log("Error", error);
    }
  };

  return useQuery({
    queryKey: [QUERY_KEYS.GET_REVIEWS_BY_ROOM_ID, roomId],
    queryFn: () => fetchData(),
    onError: (error) => {
      console.log("onError", error);
    },
    refetchOnWindowFocus: false,
    enabled: !!roomId,
  });
};

export const useCreateRoomReview = (data) => {
  return useMutation(async (data) => {
    const response = await api.post(`${BASE_URL}/room-review/create`, data);
    return response.data;
  });
};
