// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

import { useNavigate } from "react-router-dom";

// store
import { useAppSelector } from '@/store/hooks'
// store

const usePostCreateOrderNopay = () => {

  const cart = useAppSelector((state) => state.user.cart)

  const navigate = useNavigate();

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['postCreateOrder'],
    queryFn: async () => {
      const response = await axiosInstance.post('order/create-order-nopay', {
          "test": new Array(cart.id),
      })
      const data = await response.data
      navigate('/orders')
      return data
    },
  })
  return { isLoading, data, refetch };
};

export default usePostCreateOrderNopay;