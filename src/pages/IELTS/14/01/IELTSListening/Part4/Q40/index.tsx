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

  const [flag, setFlag] = useState(flags['40'])
  const [answer, setAnswer] = useState<any>(answersAll['40'])

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '40': !flag })))
  }

  const answerHandler = (e: any) => {
    setAnswer((e.target.value))
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '40': (e.target.value).trim().toLowerCase() })))
  }

  return (
    <>
      <section>
        <Box
          sx={{ px: 1 }}
          id={`q-${qn}`}
        >
          <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
            <Paper elevation={0}>
              <Typography>Problem:</Typography>
            </Paper>
          </Stack>
        </Box>

        <Box sx={{ px: 1 }}>
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
            sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1 }}
          >
            <div className="align-items-center">
              <Paper elevation={0} sx={{ width: '15px' }}>
                <Typography>●</Typography>
              </Paper>
              <Paper elevation={0}>
                <Stack direction="row" alignItems="center">
                  <Typography>
                    may harm fish and birds, e.g. by affecting
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
                    />
                  </div>
                  <Typography>
                    and building up silt
                  </Typography>
                </Stack>
              </Paper>
            </div>
            <div onClick={() => flagHandler()} className={`flag ${currentQuestion == qn && 'active'}`}>
              {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
            </div>
          </Stack>
        </Box>
      </section>

      <section>
        <Box sx={{ px: 1 }}>
          <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
            <Paper elevation={0}>
              <Typography>
                <strong>
                  Ocean thermal energy conversion:
                </strong>
              </Typography>
            </Paper>
          </Stack>
        </Box>

        <Box sx={{ px: 1 }}>
          <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', }}>
            <Paper elevation={0}>
              <Stack direction="row" alignItems="center">
                <Typography sx={{ pr: 1 }}>
                  Uses a difference in temperature between the surface and lower levels
                </Typography>
              </Stack>
            </Paper>
          </Stack>
          <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" sx={{ alignItems: 'center', }}>
            <Paper elevation={0}>
              <Stack direction="row" alignItems="center">
                <Typography sx={{ pr: 1 }}>
                  Water brought to the surface in a pipe
                </Typography>
              </Stack>
            </Paper>
          </Stack>
        </Box>
      </section>
    </>
  );
};

export default index;
