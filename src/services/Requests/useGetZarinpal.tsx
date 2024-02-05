// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const useGetZarinpal = (id: any, skill: any) => {

  let url;

  if (skill?.description?.indexOf('S') > 0) {
    url = 'zarinpal-speaking-reqX'
  }
  else if (skill?.description?.indexOf('W') > 0) {
    url = 'zarinpal-writing-reqX'
  }
  else {
    url = 'zarinpal-requestX'
  }

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['getZarinpal', id, skill],
    queryFn: async ({ queryKey }) => {
      const response = await api.get(`order/${url}/${queryKey[1]}`)
      const data = await response.data
      window.location.href = data?.meta?.url;
      return data
    },
  })
  return { isLoading, data, refetch };
};

export default useGetZarinpal;