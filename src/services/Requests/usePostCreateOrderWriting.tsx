// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const usePostCreateOrderWriting = (payload: any) => {

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['postCreateOrderWriting', payload],
    queryFn: async () => {
      const response = await api.post(`exam/create-writing`, payload)
      const data = await response.data
      return data
    },
  })
  return {isLoading, data, refetch};
};

export default usePostCreateOrderWriting;