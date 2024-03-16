// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const useGetTeacherProfile = () => {

  const { isLoading, data, refetch } = useQuery({
    queryKey: ['getTeacherProfile'],
    queryFn: async () => {
      const response = await api.get('teacher/profile')
      const data = await response.data
      return data
    },
  })
  return {isLoading, data, refetch};
};

export default useGetTeacherProfile;