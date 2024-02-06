// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const useGetTestsWriting = () => {

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['getTestsWriting'],
    queryFn: async () => {
      const response = await api.get('exam/user-writing-tests')
      const data = await response.data
      return data
    },
  })
  return {isLoading, data, refetch};
};

export default useGetTestsWriting;