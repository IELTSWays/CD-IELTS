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
// store

const index = ({ qn, colLeft = "", beforeInput = "", afterInput = "" }: any) => {

  const dispatch = useAppDispatch()

  const flags = useAppSelector((state: any) => state.user.flag)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state: any) => state.user.currentQuestion)

  const [flag, setFlag] = useState(flags[qn])
  const [answer, setAnswer] = useState<any>(answersAll[qn])

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { [qn]: !flag })))
  }

  const answerHandler = (e: any) => {
    setAnswer((e.target.value))
    dispatch(setAnswersAll(Object.assign({}, answersAll, { [qn]: (e.target.value).trim().toLowerCase() })))
  }

  return (
    <div className="align-items-start justify-content-space-between">
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        sx={{ alignItems: 'center', py: 1 }}
        id={`q-${qn}`}
      >
        {colLeft.length > 1 &&
          <Paper elevation={0} sx={{ width: '200px' }}>
            <Typography>{colLeft}</Typography>
          </Paper>
        }
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center">
            {beforeInput.length > 1 &&
              <Typography sx={{ pr: 1 }}> {beforeInput} </Typography>
            }

            <div className={`text-field ${currentQuestion == qn && 'active'} first`}>
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

            {afterInput.length > 1 &&
              <Typography sx={{ pl: 1 }}> {afterInput} </Typography>
            }
          </Stack>
        </Paper>
      </Stack>

      <div onClick={() => flagHandler()} className={`flag ${currentQuestion == qn && 'active'}`}>
        {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
      </div>
    </div>
  );
};

export default index;