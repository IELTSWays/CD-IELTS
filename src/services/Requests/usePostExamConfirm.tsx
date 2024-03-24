import { useNavigate } from "react-router-dom";

// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const usePostExamConfirm = () => {

  const navigate = useNavigate();

  const { isLoading, isSuccess, data, isError, refetch } = useQuery({
    enabled: false,
    queryKey: ['postTestConfirm'],
    queryFn: async () => {
      const response = await api.patch(`exam/answer/${localStorage.getItem('test_id')}`, {
        "confirm": true,
      })
      const data = await response.data
      Boolean(data?.confirm) ? navigate(`/IELTS/${data?.skill}`) : navigate(`/confirm/${data?.skill}`)
      return data
    },
  })
  return { isLoading, isSuccess, data, isError, refetch };
};

export default usePostExamConfirm;