// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const useGetOrders = () => {

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['getOrders'],
    queryFn: async () => {
      const response = await api.get('order/user-orders')
      const data = await response.data
      return data
    },
  })
  return {isLoading, data, refetch};
};

export default useGetOrders;