// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const useGetProfile = () => {

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['getProfile'],
    queryFn: async () => {
      const response = await api.get('accounts/profile')
      const data = await response.data
      return data
    },
  })
  return { isLoading, data, refetch };
};

export default useGetProfile;