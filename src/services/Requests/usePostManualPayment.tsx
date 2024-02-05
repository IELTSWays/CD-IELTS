// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const usePostManualPayment = (id: any, skill: any, description: any) => {

  let url;

  if (skill?.description?.indexOf('S') > 0) {
    url = 'speaking-manual-pay'
  }
  else if (skill?.description?.indexOf('W') > 0) {
    url = 'writing-manual-pay'
  }
  else {
    url = 'manual_payment'
  }

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['postManualPayment', id, skill, description],
    queryFn: async ({ queryKey }) => {
      const response = await api.post(`order/${url}/${queryKey[1]}`, queryKey[3])
      const data = await response.data
      return data
    },
  })
  return {isLoading, data, refetch};
};

export default usePostManualPayment;