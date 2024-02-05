// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const usePostCreateOrderSpeaking = (payload: any) => {

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['postCreateOrderSpeaking', payload],
    queryFn: async () => {
      const response = await api.post(`exam/create-speaking`, {
        "name": "B15AST1",
        "teacher": 1,
        "time": 1,
        "type": "academic"
      })
      const data = await response.data
      return data
    },
  })
  return { isLoading, data, refetch };
};

export default usePostCreateOrderSpeaking;