import { useNavigate } from "react-router-dom";

// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

// store
import { useAppDispatch } from '@/store/hooks'
import { setTestInfo, setAnswersAll, setCurrentQuestion } from '@/store/slices/user/userSlice'
// store

const usePostExamStart = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['postExamStart'],
    queryFn: async () => {
      const response = await axiosInstance.post('exam/start-test',
        {
          "test": "3",
          "skill": "listening",
          "type": "academic",
          "book": 1
        }
      )
      const data = await response.data
      const token: any = localStorage.getItem('token');
      dispatch(setAnswersAll({}))
      localStorage.clear();
      localStorage.setItem('token', token);
      localStorage.setItem('test_id', data.test_id);
      dispatch(setCurrentQuestion('00001'))
      dispatch(setTestInfo(data))
      navigate("/IELTS/Listening")

      return data
    },
  })
  return { isLoading, data, refetch };
};

export default usePostExamStart;