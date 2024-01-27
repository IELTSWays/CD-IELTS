import { useState } from "react";
import { useTranslation } from 'react-i18next';

// mtu
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, setFlags } from '@/store/slices/user/userSlice'
// store

const index = ({ qn }: any) => {

  const { t } = useTranslation();
  const dispatch = useAppDispatch()

  const flags = useAppSelector((state: any) => state.user.flag)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state: any) => state.user.currentQuestion)

  const [flag, setFlag] = useState(flags['3'])
  const [answer, setAnswer] = useState<any>(answersAll['00003'])

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '3': !flag })))
  }

  const answerHandler = (e: any) => {
    setAnswer((e.target.value))
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00003': (e.target.value).trim().toLowerCase() })))
  }

  return (
    <div className="align-items-start justify-content-space-between">
      <div>
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          sx={{ alignItems: 'center', py: 1 }}
          id={`q-${qn}`}
        >
          <Paper elevation={0} sx={{ width: '200px' }}>
            <Typography>{t('00009')}</Typography>
          </Paper>
          <Paper elevation={0}>
            <Paper elevation={0}>
              <Typography>{t('00010')}</Typography>
            </Paper>
          </Paper>
        </Stack>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
          <Paper elevation={0} sx={{ width: '200px' }}>
            <Typography>{t('00011')}</Typography>
          </Paper>
          <Paper elevation={0}>
            <Paper elevation={0}>
              <Stack direction="row" alignItems="center">
                <div className={`text-field ${currentQuestion == qn && 'active'}`}>
                  <TextField
                    autoComplete="false"
                    margin="normal"
                    placeholder={qn}
                    value={answer}
                    onChange={(e) => answerHandler(e)}
                    onClick={() => dispatch(setCurrentQuestion(qn))}
                  />
                </div>
                <Typography sx={{ pl: 1 }}> {t('00012')} </Typography>
              </Stack>
            </Paper>
          </Paper>
        </Stack>
      </div>
      <div onClick={() => flagHandler()} className={`flag ${currentQuestion == qn && 'active'}`}>
        {flag ? <BookmarkIcon /> : <BookmarkBorderIcon />}
      </div>
    </div>
  )
};

export default index;