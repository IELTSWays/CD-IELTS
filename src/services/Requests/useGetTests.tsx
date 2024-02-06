// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const useGetTests = () => {

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['getTests'],
    queryFn: async () => {
      const response = await api.get('exam/user-tests')
      const data = await response.data
      return data
    },
  })
  return {isLoading, data, refetch};
};

export default useGetTests;