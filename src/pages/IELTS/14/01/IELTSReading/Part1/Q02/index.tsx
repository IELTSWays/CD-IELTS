import React from "react";
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

  const [flag, setFlag] = useState(flags['2'])
  const [answer, setAnswer] = useState<any>(answersAll['2'])

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '2': !flag })))
  }

  const answerHandler = (e: any) => {
    setAnswer((e.target.value))
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '2': (e.target.value).trim().toLowerCase() })))
  }

  return (
    <div className="ielts-question-textfield" id={`q-${qn}`}>
      <span>● board games involve</span>
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
      <span>and turn-taking</span>
      <div onClick={() => flagHandler()} className={`flag ${currentQuestion == qn && 'active'}`}>
        {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
      </div>
    </div>
  );
};

export default index;