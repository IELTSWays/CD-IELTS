// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

import { useNavigate } from "react-router-dom";

const usePatchProfile = (payload: any) => {

  const navigate = useNavigate();

  const { data, isLoading, isSuccess, refetch } = useQuery({
    enabled: false,
    queryKey: ['patchProfile', payload],
    queryFn: async () => {
      const response = await api.patch('accounts/profile', payload)
      const data = await response.data
      navigate('/')
      return data
    },
  })
  return { data, isLoading, isSuccess, refetch };
};

export default usePatchProfile;