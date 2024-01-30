// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

// store
import { useAppSelector } from '@/store/hooks'
// store

const useGetProducts = () => {

  const fontSize = useAppSelector((state) => state.user.fontSize)
  console.log(fontSize);

  const { isLoading, data } = useQuery({
    queryKey: ['getProducts'],
    queryFn: async () => {
      const response = await axiosInstance.get('book/products')
      const data = await response.data
      return data
    },
  })
  return { isLoading, data };
};

export default useGetProducts;