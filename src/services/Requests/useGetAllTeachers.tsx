// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const useGetAllTeachers = () => {

  const { isLoading, data } = useQuery({
    queryKey: ['getAllTeachers'],
    queryFn: async () => {
      const response = await api.get('users', {})
      const data = await response.data
      return data
    },
  })
  return {isLoading, data};
};

export default useGetAllTeachers;