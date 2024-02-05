import { useNavigate } from "react-router-dom";

// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const useGetZarinpal = (id: any) => {

  const navigate = useNavigate();

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['getZarinpal', id],
    queryFn: async ({ queryKey }) => {
      const response = await api.get(`order/zarinpal-request/${queryKey[1]}`)
      const data = await response.data
      window.location.href = data?.meta?.url;
      return data
    },
  })
  return { isLoading, data, refetch };
};

export default useGetZarinpal;