// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

// store
import { useAppSelector } from '@/store/hooks'
// store

const usePostAnswer = () => {

  const fontSize = useAppSelector((state) => state.user.fontSize)
  console.log(fontSize);

  const { isLoading, data } = useQuery({
    queryKey: ['postAnswer'],
    queryFn: async () => {
      const response = await axiosInstance.post('exam/answer/81088FF0ATPH', {
          "test_done":false,
          "answers":{
              // "00001": "Q1111",
              "00007": "demo",
          }
      })
      const data = await response.data
      return data
    },
  })
  return { isLoading, data };
};

export default usePostAnswer;

