import React from "react";
import { useState } from "react";

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
import { Box } from "@mui/material";
// store

const index = ({ qn }: any) => {

  const dispatch = useAppDispatch()

  const flags = useAppSelector((state: any) => state.user.flag)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state: any) => state.user.currentQuestion)

  const [flag, setFlag] = useState(flags['35'])
  const [answer, setAnswer] = useState<any>(answersAll['35'])

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '35': !flag })))
  }

  const answerHandler = (e: any) => {
    setAnswer((e.target.value))
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '35': (e.target.value).trim().toLowerCase() })))
  }

  return (
    <>
      <Box sx={{ px: 1 }} id={`q-${qn}`}
      >
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
          <Paper elevation={0}>
            <Typography><strong>Tidal energy</strong></Typography>
          </Paper>
        </Stack>
      </Box>
      <Box sx={{ px: 1 }}>
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
          sx={{ alignItems: 'center', py: 1, justifyContent: 'space-between' }}
        >
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center">
              <Typography>
                Tides are more
              </Typography>
              <div className={`text-field ${currentQuestion == qn && 'active'}`}>
                <TextField
                  autoComplete='off'
                  spellCheck="false"
                  margin="normal"
                  placeholder={qn}
                  value={answer}
                  onChange={(e) => answerHandler(e)}
                  onClick={() => dispatch(setCurrentQuestion(qn))}
                  id={`${flag && currentQuestion == qn && 'input-active-flag'}`}
                />
              </div>
              <Typography>
                than waves
              </Typography>
            </Stack>
          </Paper>
          <div onClick={() => flagHandler()} className={`flag ${currentQuestion == qn && 'active'}`}>
            {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
          </div>
        </Stack>
      </Box>
    </>
  );
};

export default index;
