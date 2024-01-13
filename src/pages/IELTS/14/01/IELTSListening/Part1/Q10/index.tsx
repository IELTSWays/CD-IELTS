import { useState } from "react";
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();
  const dispatch = useAppDispatch()

  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const [answer, setAnswer] = useState<any>(answersAll['00010'])

  const answerHandler = (e: any) => {
    setAnswer(e.target.value)
    dispatch(setAnswersAll(Object.assign({}, answersAll, {'00010': e.target.value})))
  }

  return (
    <>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        id={`q-${qn}`}
      >
        <Paper elevation={0}>
          <Typography><strong>{t('00027')}</strong></Typography>
        </Paper>
        <Paper elevation={0}></Paper>
      </Stack>

      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
        <Paper elevation={0} sx={{ width: '200px' }}>
        </Paper>
        <Paper elevation={0}>
          <div className={`text-field ${currentQuestion == qn && 'active'}`}>
            <TextField
              margin="normal"
              placeholder={qn}
              value={answer}
              onChange={(e) => answerHandler(e)}
              onClick={() => dispatch(setCurrentQuestion(qn))}
            />
          </div>
        </Paper>
      </Stack>
    </>
  );
};

export default index;
