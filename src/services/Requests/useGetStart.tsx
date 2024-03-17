// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

// store
import { useAppDispatch } from '@/store/hooks'
import { setTestInfo, setCurrentQuestion } from '@/store/slices/user/userSlice'
// store

const useGetStart = () => {

  const dispatch = useAppDispatch()

  const { isLoading, isSuccess, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['getAnswer'],
    queryFn: async () => {
      const response = await axiosInstance.get(`exam/answer/${localStorage.getItem('test_id')}`)
      const data = await response.data.answers
      
      const token: any = localStorage.getItem('token');
      const testId: any = localStorage.getItem('test_id');
      const confirm: any = localStorage.getItem('confirm');
      const profile: any = localStorage.getItem('is_profile_fill');
      localStorage.clear();
      localStorage.setItem('token', token);
      localStorage.setItem('test_id', testId);
      localStorage.setItem('confirm', confirm);
      localStorage.setItem('is_profile_fill', profile);
      dispatch(setTestInfo(data))
      dispatch(setCurrentQuestion(1))

      return data
    },
  })
  return { isLoading, isSuccess, data, refetch };
};

export default useGetStart;