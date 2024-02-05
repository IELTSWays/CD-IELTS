// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const useGetOrdersSpeaking = () => {

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['getOrdersSpeaking'],
    queryFn: async () => {
      const response = await api.get('exam/user-speaking-tests')
      const data = await response?.data?.results
      return data
    },
  })
  return {isLoading, data, refetch};
};

export default useGetOrdersSpeaking;