import { useState } from "react";

// mtu
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
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

  const [answer, setAnswer] = useState<any>(answersAll['00005'])

  const answerHandler = (e: any) => {
    setAnswer(e.target.value)
    dispatch(setAnswersAll(Object.assign({}, answersAll, {'00005': e.target.value})))
  }

  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="row"
      useFlexGap
      flexWrap="wrap"
      sx={{ alignItems: 'center', py: 1 }}
      id={`q-${qn}`}
    >
      <Paper elevation={0} sx={{ width: '200px' }}>
      </Paper>
      <Paper elevation={0}>
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center">
            <Typography sx={{ pr: 1 }}> – </Typography>
            <div className={`text-field ${currentQuestion == qn && 'active'}`}>
              <TextField
                margin="normal"
                placeholder={qn}
                value={answer}
                onChange={(e) => answerHandler(e)}
                onClick={() => dispatch(setCurrentQuestion(qn))}
              />
            </div>
          </Stack>
        </Paper>
      </Paper>
    </Stack>
  );
};

export default index;
