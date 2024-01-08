// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

// store
import { useAppSelector } from '@/store/hooks'
// store

const usePostExamStart = () => {

  const fontSize = useAppSelector((state) => state.user.fontSize)
  console.log(fontSize);

  const { isLoading, data } = useQuery({
    queryKey: ['postExamStart'],
    queryFn: async () => {
      const response = await axiosInstance.post('exam/start', {
          "name":"ielts 14 listening",
          "skill":"listening",
          "type":"academic",
          "book":1
      })
      const data = await response.data
      return data
    },
  })
  return { isLoading, data };
};

export default usePostExamStart;