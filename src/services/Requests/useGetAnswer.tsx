// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setAnswersOld } from '@/store/slices/user/userSlice'
// store

const usePostAnswer = () => {

  const dispatch = useAppDispatch()

  const fontSize = useAppSelector((state) => state.user.fontSize)

  const { isLoading, data } = useQuery({
    queryKey: ['getAnswer'],
    queryFn: async () => {
      const response = await axiosInstance.get('exam/answer/81088FF0ATPH')
      const data = await response.data.answers
      dispatch(setAnswersOld(data))
      
      console.log('[useGetAnswer', data);
      

      return data
    },
  })
  return { isLoading, data };
};


export default usePostAnswer;