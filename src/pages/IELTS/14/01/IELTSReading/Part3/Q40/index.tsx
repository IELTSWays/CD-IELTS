import { useState } from "react";

// mtu
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

  const [flag, setFlag] = useState(flags['40'])
  const [answer, setAnswer] = useState<any>(answersAll['00040'])

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '40': !flag })))
  }

  const answerHandler = (e: any) => {
    setAnswer((e.target.value))
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00040': (e.target.value).trim().toLowerCase() })))
  }

  return (
    <div className="ielts-question-textfield" id={`q-${qn}`}>
      <span>and the</span>
      <TextField
        autoComplete='off'
        spellCheck="false"
        margin="normal"
        placeholder={qn}
        value={answer}
        onChange={(e) => answerHandler(e)}
        onClick={() => dispatch(setCurrentQuestion(qn))}
      />
      <span>Of the staff.</span>
      <div onClick={() => flagHandler()} className={`flag ${currentQuestion == qn && 'active'}`}>
        {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
      </div>
      <span> A balance was required between a degree of freedom and maintaining work standards.</span>
    </div>
  );
};

export default index;