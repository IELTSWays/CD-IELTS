// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const useGetReportFullFreeOne = (id: any) => {

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['getReportFullverify', id],
    queryFn: async ({ queryKey }) => {
      const response = await api.get(`report/full-report-one/${queryKey[1]}`)
      const data = await response.data
      return data
    },
  })
  return { isLoading, data, refetch };
};

export default useGetReportFullFreeOne;