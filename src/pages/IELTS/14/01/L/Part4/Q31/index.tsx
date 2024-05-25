import React from "react";
import { useState } from "react";

// mtu
import Box from '@mui/material/Box';
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

  const dispatch = useAppDispatch()

  const flags = useAppSelector((state: any) => state.user.flag)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state: any) => state.user.currentQuestion)

  const [flag, setFlag] = useState(flags['31'])
  const [answer, setAnswer] = useState<any>(answersAll['31'])

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '31': !flag })))
  }

  const answerHandler = (e: any) => {
    setAnswer((e.target.value))
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '31': (e.target.value).trim().toLowerCase() })))
  }

  return (
    <section id={`q-${qn}`}>
      <Box>
        <Typography>
          <h3> Questions 31 - 40 </h3>
        </Typography>
        <Typography sx={{ my: 1.5 }}>
          Complete the notes below.
        </Typography>
        <Typography className='italic'>
          Write
          <Typography sx={{ px: 1 }}> <strong className='uppercase'> ONE WORD ONLY </strong> </Typography>
          for each answer.
        </Typography>
      </Box>

      <Typography align="center" sx={{ py: 2 }}>
        <h3 className='uppercase'>CRIME REPORT FORM</h3>
      </Typography>

      <Box sx={{ px: 1 }}>
        <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
          <Paper elevation={0}>
            <Typography>
              <strong>Introduction</strong>
            </Typography>
          </Paper>
        </Stack>
      </Box>

      <Box sx={{ px: 1 }}>
        <div id="q-301">
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
            sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1 }}
          >
            <Paper elevation={0}>
              <Stack direction="row" alignItems="center">
                <Typography>
                  More energy required because of growth in population and
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
              </Stack>
            </Paper>
            <div onClick={() => flagHandler()} className={`flag ${currentQuestion == qn && 'active'}`}>
              {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
            </div>
          </Stack>
          <Box sx={{ py: 1.5 }}>
            <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', py: 1 }}>
              <Paper elevation={0}>
                <Stack direction="row" alignItems="center">
                  <Typography>
                    What’s needed:
                  </Typography>
                </Stack>
              </Paper>
            </Stack>

            <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', mt: 1 }}>
              ● renewable energy sources
            </Stack>
            <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', mt: 1 }}>
              ● methods that won’t create pollution
            </Stack>
          </Box>
        </div>
      </Box>
    </section>

  );
};

export default index;