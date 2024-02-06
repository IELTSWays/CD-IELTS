// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const useGetTeacherList = () => {

  const { isLoading, data, refetch } = useQuery({
    queryKey: ['getTeacherList'],
    queryFn: async () => {
      const response = await api.get('teacher/list')
      const data = await response.data
      return data
    },
  })
  return {isLoading, data, refetch};
};

export default useGetTeacherList;