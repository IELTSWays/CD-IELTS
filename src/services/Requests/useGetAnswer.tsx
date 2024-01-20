// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

// store
import { useAppDispatch } from '@/store/hooks'
import { setTestInfo } from '@/store/slices/user/userSlice'
// store

const useGetAnswer = () => {

  const dispatch = useAppDispatch()

  const { isLoading, isSuccess, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['getAnswer'],
    queryFn: async () => {
      const response = await axiosInstance.get(`exam/answer/${localStorage.getItem('test_id')}`)
      const data = await response.data.answers
      dispatch(setTestInfo(data))
      return data
    },
  })
  return { isLoading, isSuccess, data, refetch };
};

export default useGetAnswer;