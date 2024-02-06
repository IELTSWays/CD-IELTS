// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const useGetTestsSpeaking = () => {

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['getTestsSpeaking'],
    queryFn: async () => {
      const response = await api.get('exam/user-speaking-tests')
      const data = await response.data
      return data
    },
  })
  return {isLoading, data, refetch};
};

export default useGetTestsSpeaking;