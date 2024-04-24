// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const useGetReportVideo = (id: any) => {

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['getReportVideo', id],
    queryFn: async ({ queryKey }) => {
      const response = await api.get(`report/video-report/${queryKey[1]}`)
      const data = await response.data
      return data
    },
  })
  return { isLoading, data, refetch };
};

export default useGetReportVideo;