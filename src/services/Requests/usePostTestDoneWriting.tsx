// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";

const usePostTestDoneWriting = () => {

  const navigate = useNavigate();
  const answersAll = useAppSelector((state) => state.user.answersAll)

  const { isLoading, isSuccess, data, isError, refetch } = useQuery({
    enabled: false,
    queryKey: ['postTestDone'],
    queryFn: async () => {
      const response = await api.patch(`exam/answer-writing/${localStorage.getItem('test_id')}`, {
        "test_done": true,
        "confirm": true,
        "task1": answersAll['00001'],
        "task2": answersAll['00002'],
      })
      const data = await response.data
      navigate('/exams')
      return data
    },
  })
  return { isLoading, isSuccess, data, isError, refetch };
};

export default usePostTestDoneWriting;