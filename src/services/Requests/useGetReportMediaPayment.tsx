// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const useGetReportMediaPayment = (id: any) => {

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['getReportMediaPayment', id],
    queryFn: async ({ queryKey }) => {
      const response = await api.get(`report/media-report-payment/${queryKey[1]}`)
      const data = await response.data
      data?.meta && (window.location.href = data?.meta?.url);
      return data
    },
  })
  return { isLoading, data, refetch };
};

export default useGetReportMediaPayment;