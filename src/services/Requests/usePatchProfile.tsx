// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const usePatchProfile = (payload: any) => {

  const { isLoading, isSuccess, refetch } = useQuery({
    enabled: false,
    queryKey: ['patchProfile', payload],
    queryFn: async () => {
      const response = await api.patch('accounts/profile', payload)
      const data = await response.data
      return data
    },
  })
  return { isLoading, isSuccess, refetch };
};

export default usePatchProfile;