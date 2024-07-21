import { api } from "configs/AxiosConfig";
import { BASE_URL } from "constants/endpoint";
import { QUERY_KEYS } from "libs/react-query/queryKey";
import { useQuery } from "react-query";


export const useGetAllServices = () => {
  const fetchData = async () => {
    try {
      const response = await api.get(`${BASE_URL}/service`);
      return response.data;
    } catch (error) {
      console.log('error', error);
    }
  };

  return useQuery({
    queryKey: [QUERY_KEYS.GET_SERVICES],
    queryFn: () => fetchData(),
    onError: (error) => {
      console.log('error', error)
    },
    refetchOnWindowFocus: false,
  });
};


