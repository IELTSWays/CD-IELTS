// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const useGetOrdersWriting = () => {

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['getOrdersWriting'],
    queryFn: async () => {
      const response = await api.get('exam/user-writing-tests')
      const data = await response?.data?.results
      return data
    },
  })
  return {isLoading, data, refetch};
};

export default useGetOrdersWriting;