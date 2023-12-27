// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

// store
import { useAppSelector } from '@/store/hooks'
// store

const useGetProfile = () => {

  const fontSize = useAppSelector((state) => state.user.fontSize)
  console.log(fontSize);

  const { isLoading, data } = useQuery({
    queryKey: ['getProfile'],
    queryFn: async () => {
      const response = await axiosInstance.get('accounts/profile')
      const data = await response.data
      return data
    },
  })
  return { isLoading, data };
};

export default useGetProfile;

