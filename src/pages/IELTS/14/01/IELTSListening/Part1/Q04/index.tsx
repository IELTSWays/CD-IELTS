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

  const [flag, setFlag] = useState(flags['4'])
  const [answer, setAnswer] = useState<any>(answersAll['4'])

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '4': !flag })))
  }

  const answerHandler = (e: any) => {
    setAnswer((e.target.value))
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '4': (e.target.value).trim().toLowerCase() })))
  }

  return (
    <div className="align-items-start justify-content-space-between">
      <div>
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          id={`q-${qn}`}
        >
          <Paper elevation={0}>
            <Typography>
              <strong>{t('00013')} </strong>
            </Typography>
          </Paper>
          <Paper elevation={0}></Paper>
        </Stack>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
          <Paper elevation={0} sx={{ width: '200px' }}>
            <Typography>{t('00014')}</Typography>
          </Paper>
          <Paper elevation={0}>
            <Paper elevation={0}>
              <Stack direction="row" alignItems="center">
                <Typography sx={{ pr: 1 }}> – </Typography>
                <Typography sx={{ pr: 1 }}> {t('00015')} </Typography>
                <Typography>£</Typography>
                <div className={`text-field ${currentQuestion == qn && 'active'}`}>
                  <TextField
                    autoComplete='off'
                    spellCheck="false"
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
      </div>
      <div onClick={() => flagHandler()} className={`flag ${currentQuestion == qn && 'active'}`}>
        {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
      </div>
    </div>
  );
};

export default index;