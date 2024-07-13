// import { useQuery } from '@tanstack/react-query'
import { api } from 'configs/AxiosConfig'
import { useQuery } from 'react-query'

export const useGetProfile = () => {
  const fetchData = async () => {
    try {
      const response = await api.get(`/signIn`)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  return useQuery({
    queryKey: ['Profile'],
    queryFn: () => fetchData(),
    staleTime: 3 * 1000,
    refetchOnWindowFocus: false,
    retry: 2
  })
}
