// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const useGetReportFull = (id: any) => {

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['getReport', id],
    queryFn: async ({ queryKey }) => {
      const response = await api.get(`report/full-report/${queryKey[1]}`)
      const data = await response.data
      return data
    },
  })
  return { isLoading, data, refetch };
};

export default useGetReportFull;