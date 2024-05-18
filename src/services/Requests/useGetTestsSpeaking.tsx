// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const useGetTestsSpeaking = () => {

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['getTestsSpeaking'],
    queryFn: async () => {
      const response = await api.get('exam/user-speaking-tests')
      const data = await response.data
      const modifiedResults = data.results.map((item: any) => ({
        ...item,
        skill: 'speaking'
      }));
      return {
        ...data,
        results: modifiedResults
      };
    },
  })
  return {isLoading, data, refetch};
};

export default useGetTestsSpeaking;