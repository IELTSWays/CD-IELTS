// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const useGetTeacherTimes = () => {

  const { isLoading, data, refetch } = useQuery({
    queryKey: ['getTeacherTimes'],
    queryFn: async () => {
      const response = await api.get('teacher/teacher-times')
      const data = await response.data
      return data
    },
  })
  return {isLoading, data, refetch};
};

export default useGetTeacherTimes;