// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

import { useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";

const usePostTestDone = () => {

  const navigate = useNavigate();
  const answersAll = useAppSelector((state) => state.user.answersAll)

  const { isLoading, isSuccess, data, isError, refetch } = useQuery({
    enabled: false,
    queryKey: ['postTestDone'],
    queryFn: async () => {
      const response = await api.patch(`exam/answer/${localStorage.getItem('test_id')}`, {
        "test_done": true,
        "answers": answersAll,
      })
      const data = await response.data
      navigate('/exams')
      return data
    },
  })
  return { isLoading, isSuccess, data, isError, refetch };
};

export default usePostTestDone;