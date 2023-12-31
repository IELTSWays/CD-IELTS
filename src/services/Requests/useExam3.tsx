// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

// store
import { useAppSelector } from '@/store/hooks'
// store

const useExam3 = () => {

  const fontSize = useAppSelector((state) => state.user.fontSize)
  console.log(fontSize);

  const { isLoading, data } = useQuery({
    queryKey: ['getExam'],
    queryFn: async () => {
      const response = await axiosInstance.get('exam/test/3')
      const data = await response.data
      return data
    },
  })
  return { isLoading, data };
};

export default useExam3;

