import { useState } from "react";

// mtu
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

  const [flag, setFlag] = useState(flags['24'])
  const [answer, setAnswer] = useState<any>(answersAll['00024'])

  const answerHandler = (e: any) => {
    setAnswer((e.target.value))
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00024': (e.target.value).trim().toLowerCase() })))
  }

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '24': !flag })))
  }

  return (
    <div className="align-items-start justify-content-space-between">
      <div className="d-flex">
        <Typography sx={{ pr: 1, py: 1 }} id={`q-${qn}`}>
          They were concerned about damage to the environment and about
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
        <div onClick={() => flagHandler()} className={`flag ${currentQuestion == 24 && 'active'}`}>
          {flag ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </div>
      </div>
    </div>
  );
};

export default index;
