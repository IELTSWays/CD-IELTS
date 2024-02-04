// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const usePostManualPayment = (id: any, description: any) => {

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['postManualPayment', id, description],
    queryFn: async ({ queryKey }) => {
      const response = await api.post(`order/manual_payment/${queryKey[1]}`, queryKey[2])
      const data = await response.data
      return data
    },
  })
  return {isLoading, data, refetch};
};

export default usePostManualPayment;