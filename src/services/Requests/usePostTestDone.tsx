// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const usePostTestDone = () => {

  const { isLoading, isSuccess, data, isError, refetch } = useQuery({
    enabled: false,
    queryKey: ['postTestDone'],
    queryFn: async () => {
      const response = await api.patch(`exam/answer/${localStorage.getItem('test_id')}`, { test_done: true })
      const data = await response.data
      return data
    },
  })
  return { isLoading, isSuccess, data, isError, refetch };
};

export default usePostTestDone;