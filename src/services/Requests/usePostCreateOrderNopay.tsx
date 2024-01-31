// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

// store
import { useAppSelector } from '@/store/hooks'
// store

const usePostCreateOrderNopay = () => {

  const cart = useAppSelector((state) => state.user.cart)

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['postCreateOrder'],
    queryFn: async () => {
      const response = await axiosInstance.post('order/create-order-nopay', {
          "test": new Array(cart.id),
      })
      const data = await response.data
      return data
    },
  })
  return { isLoading, data, refetch };
};

export default usePostCreateOrderNopay;