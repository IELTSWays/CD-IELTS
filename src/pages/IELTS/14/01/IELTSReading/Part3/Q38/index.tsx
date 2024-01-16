import { useState } from "react";

// mtu
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, } from '@/store/slices/user/userSlice'
// store

const index = ({ qn }: any) => {

  const dispatch = useAppDispatch()

  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const [answer, setAnswer] = useState<any>(answersAll['00038'])

  const answerHandler = (e: any) => {
    setAnswer((e.target.value))
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00038': (e.target.value).trim().toLowerCase() })))
  }

  return (
    <>
      <Typography sx={{ pr: 1, py: 1 }} id={`q-${qn}`}>
      , and that management involvement led to lower staff
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
    </>
  );
};

export default index;
