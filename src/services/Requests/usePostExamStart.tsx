import { useNavigate } from "react-router-dom";

// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

// store
import { useAppDispatch } from '@/store/hooks'
import { setTestInfo, setAnswersAll, setCurrentQuestion, setFlags } from '@/store/slices/user/userSlice'
// store

const initFlag :any = {};
for (let i = 1; i <= 40; i++) {
  initFlag[i] = null;
}
const entries = [];
for (let i = 1; i <= 40; i++) {
entries.push([i, null]);
}

const usePostExamStart = (test: any) => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['postExamStart', test],
    queryFn: async ({ queryKey }) => {
      const response = await axiosInstance.post('exam/start-test',
        queryKey[1]
      )
      const data = await response.data
      const token: any = localStorage.getItem('token');
      dispatch(setAnswersAll({}))
      localStorage.clear();
      localStorage.setItem('token', token);
      localStorage.setItem('test_id', data.test_id);
      dispatch(setCurrentQuestion('00001'))
      dispatch(setTestInfo(data))
      dispatch(setAnswersAll(data.answers))
      // dispatch(setFlags(initFlag))

      navigate(`/IELTS/${queryKey[1]?.skill}`)

      return data
    },
  })
  return { isLoading, data, refetch };
};

export default usePostExamStart;