import { useState } from "react";

// mtu
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// mtu

// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, setFlags } from '@/store/slices/user/userSlice'
// store

const index = ({ qn }: any) => {

  const dispatch = useAppDispatch()

  const flags = useAppSelector((state: any) => state.user.flag)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const [flag, setFlag] = useState(flags['38'])
  const [answer, setAnswer] = useState<any>(answersAll['00038'])

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '38': !flag })))
  }

  const postAnswer = useQuery({
    enabled: false,
    queryKey: ['postAnswer38'],
    queryFn: async () => {
      const response = await axiosInstance.post(`exam/answer/${localStorage.getItem('test_id')}`, {
        "test_done": false,
        "answers": {
          "00038": localStorage.getItem('00038')
        }
      })
      const data = await response.data
      getAnswer.refetch()
      return data
    },
  })

  const getAnswer = useQuery({
    queryKey: ['getAnswer38'],
    queryFn: async () => {
      const response = await axiosInstance.get(`exam/answer/${localStorage.getItem('test_id')}`)
      const data = await response.data.answers
      dispatch(setAnswersAll(data))
      return data
    },
  })

  const answerHandler = (e: any) => {
    setAnswer((e.target.value))
    localStorage.setItem('00038', e.target.value);
    postAnswer.refetch()
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00038': (e.target.value).trim().toLowerCase() })))
    getAnswer.refetch()
  }

  return (
    <div className="align-items-start justify-content-space-between">
      <div className="d-flex">
        <Typography sx={{ px: 1, py: 1 }} id={`q-${qn}`}>
          , and that management involvement led to lower staff
        </Typography>
        <div className={`text-field ${currentQuestion == qn && 'active'}`}>
          <TextField
            autoComplete='off'
            margin="normal"
            placeholder={qn}
            value={answer}
            onChange={(e) => answerHandler(e)}
            onClick={() => dispatch(setCurrentQuestion(qn))}
          />
        </div>
      </div>
      <div onClick={() => flagHandler()} className={`flag ${currentQuestion == 38 && 'active'}`}>
        {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
      </div>
    </div>
  );
};

export default index;