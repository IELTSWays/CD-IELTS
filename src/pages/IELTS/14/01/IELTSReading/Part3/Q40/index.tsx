import { useState } from "react";

// mtu
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// mtu

// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, } from '@/store/slices/user/userSlice'
// store

const index = ({ qn }: any) => {

  const dispatch = useAppDispatch()

  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const [answer, setAnswer] = useState<any>(answersAll['00040'])

  const postAnswer = useQuery({
    enabled: false,
    queryKey: ['postAnswer40'],
    queryFn: async () => {
      const response = await axiosInstance.post(`exam/answer/${localStorage.getItem('test_id')}`, {
        "test_done": false,
        "answers": {
          "00040": localStorage.getItem('00040')
        }
      })
      const data = await response.data
      getAnswer.refetch()
      return data
    },
  })

  const getAnswer = useQuery({
    queryKey: ['getAnswer40'],
    queryFn: async () => {
      const response = await axiosInstance.get(`exam/answer/${localStorage.getItem('test_id')}`)
      const data = await response.data.answers
      dispatch(setAnswersAll(data))
      return data
    },
  })

  const answerHandler = (e: any) => {
    setAnswer((e.target.value))
    localStorage.setItem('00040', e.target.value);
    postAnswer.refetch()
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00040': (e.target.value).trim().toLowerCase() })))
    getAnswer.refetch()
  }

  return (
    <>
      <Typography sx={{ px: 1, py: 1 }} id={`q-${qn}`}>
        and the
      </Typography>
      <div className={`text-field ${currentQuestion == qn && 'active'}`}>
        <TextField
          margin="normal"
          placeholder={qn}
          value={answer}
          onChange={(e) => answerHandler(e)}
          onClick={() => dispatch(setCurrentQuestion(qn))}
        />
      </div>

      <Typography sx={{ pr: 1, py: 1 }}>
        Of the staff. A balance was required between a degree of freedom and maintaining work standards.
      </Typography>
    </>
  );
};

export default index;
