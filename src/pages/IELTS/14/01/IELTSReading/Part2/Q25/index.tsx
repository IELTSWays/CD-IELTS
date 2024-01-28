import { useState } from "react";

// mtu
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
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
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const [flag, setFlag] = useState(flags['25'])
  const [answer, setAnswer] = useState<any>(answersAll['00025'])

  const answerHandler = (e: any) => {
    setAnswer((e.target.value))
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00025': (e.target.value).trim().toLowerCase() })))
  }

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '25': !flag })))
  }

  return (
    <div className="d-flex">
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        sx={{ alignItems: 'center', py: 1 }}
        id={`q-${qn}`}
      >
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center" sx={{ flexWrap: 'wrap' }}>
            <Typography sx={{ pr: 1, py: 1 }}>
              and believed that the bike-sharing scheme would draw attention to these issues. As well as painting some bikes white, they handed out
            </Typography>
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
            <Typography sx={{ pl: 1, py: 1 }}>
              that condemned the use of cars.
            </Typography>
          </Stack>
        </Paper>
      </Stack>
      <div onClick={() => flagHandler()} className={`flag ${currentQuestion == 25 && 'active'}`}>
        {flag ? <BookmarkIcon /> : <BookmarkBorderIcon />}
      </div>
    </div>
  );
};

export default index;