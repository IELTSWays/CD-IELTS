import React from "react";
import { useState } from "react";
import { useLocation } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, setFlags } from '@/store/slices/user/userSlice'

const defaultOptions =
  [
    { label: 'YES', value: "yes", },
    { label: 'NO', value: "no", },
    { label: 'NOT GIVEN', value: "not given", },
  ]

const index = ({ qn, question, options = defaultOptions }: any) => {

  const dispatch = useAppDispatch();
  const location = useLocation();
  const flags = useAppSelector((state: any) => state.user.flag)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state: any) => state.user.currentQuestion)
  const reading = location.pathname.includes('reading')
  const listening = location.pathname.includes('listening')

  const [flag, setFlag] = useState(flags[qn])
  const [answer, setAnswer] = useState(answersAll[qn]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer((event.target as HTMLInputElement).value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { [qn]: ((event.target as HTMLInputElement).value) })))
  };

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { [qn]: !flag })))
  }

  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="column"
      useFlexGap
      flexWrap="wrap"
      sx={{ py: 1 }}
      className="radio-select"
      id={
        (reading && (qn === 1 || qn === 14 || qn === 27))
          ||
          (listening && (qn === 1 || qn === 11 || qn === 21 || qn === 31))
          ? null :
          `q-${qn}`
      }>
      <div className="align-items-start justify-content-space-between type-radio">
        <Paper elevation={0}>
          <strong className={`question-now ${flag && 'active-flag'} ${currentQuestion == qn && 'active'} `}> {qn} </strong>
          <span className="question"> {question} </span>
        </Paper>
        <div onClick={() => flagHandler()} className={`flag ${currentQuestion == qn && 'active'}`}>
          {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
        </div>
      </div>
      <Paper elevation={0}>
        <Stack direction="row" alignItems="center" className="ielts-checkbox">
          <FormControl>
            <RadioGroup
              value={answer}
              onChange={handleChange}
            >
              {options.map((i: any) => {
                return (
                  <FormControlLabel
                    value={i.value}
                    control={<Radio />}
                    label={i.label}
                    onClick={() => dispatch(setCurrentQuestion(qn))}
                  />
                )
              })}
            </RadioGroup>
          </FormControl>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default index;