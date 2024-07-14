// import { useQuery } from '@tanstack/react-query'
import { api } from 'configs/AxiosConfig'
import { BASE_URL } from 'constants/endpoint'

export const useRegisterAccount = async (data) => {
  try {
    const response = await api.post(`${BASE_URL}/auth/signUp`, data)
    return response.data
  } catch (error) {
    throw error
  }
}

export const signInAccount = async (data) => {
  try {
    const response = await api.post(`${BASE_URL}/auth/signIn`, data);
    console.log('Login successful:', response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};