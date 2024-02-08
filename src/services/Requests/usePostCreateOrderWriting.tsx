// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

import { useNavigate } from "react-router-dom";

const usePostCreateOrderWriting = (payload: any) => {

  const navigate = useNavigate();

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['postCreateOrderWriting', payload],
    queryFn: async () => {
      const response = await api.post(`exam/create-writing`, payload)
      const data = await response.data
      navigate('/orders')
      return data
    },
  })
  return {isLoading, data, refetch};
};

export default usePostCreateOrderWriting;