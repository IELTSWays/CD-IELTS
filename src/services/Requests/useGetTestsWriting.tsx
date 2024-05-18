// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const useGetTestsWriting = () => {

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['getTestsWriting'],
    queryFn: async () => {
      const response = await api.get('exam/user-writing-tests')
      const data = await response.data
      const modifiedResults = data.results.map((item: any) => ({
        ...item,
        skill: 'writing'
      }));
      return {
        ...data,
        results: modifiedResults
      };
    },
  })
  return { isLoading, data, refetch };
};

export default useGetTestsWriting;