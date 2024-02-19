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
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const [flag, setFlag] = useState(flags['26'])
  const [answer, setAnswer] = useState<any>(answersAll['00026'])

  const answerHandler = (e: any) => {
    setAnswer((e.target.value))
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00026': (e.target.value).trim().toLowerCase() })))
  }

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '26': !flag })))
  }

  return (
    <>
      <div className="ielts-question-textfield" id={`q-${qn}`}>
        <span> However, the scheme was not a great success:</span>
        <span> almost as quickly as Provo left the bikes around the city, the </span>
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
        <div onClick={() => flagHandler()} className={`flag ${currentQuestion == 26 && 'active'}`}>
          {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
        </div>
      </div>
      <div>
        <span>
          Took them away. According to Schimmelpennink,
        </span>
        <span>
          the scheme was intended to be symbolic.
        </span>
        <span>
          The idea was to get people thinking about the issues.
        </span>
      </div>
    </>
  );
};

export default index;