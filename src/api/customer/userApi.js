import { QUERY_KEYS } from "api/queryKey";
import { api } from "configs/AxiosConfig";
import { BASE_URL } from "constants/endpoint";
import { useQuery } from "react-query";

export const useGetCurrentUser = () => {
  const fetchData = async () => {
    try {
      const response = await api.get(`${BASE_URL}/profile/detail`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return useQuery([QUERY_KEYS.GET_CURRENT_USER], () => fetchData(), {
    onError: (error) => {
      console.log("error", error);
    },
    refetchOnWindowFocus: false,
  });
};

export const useUpdateCurrentUser = async (data) => {
  try {
    const response = await api.post(`${BASE_URL}/profile/update`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
