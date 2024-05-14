import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setCurrentQuestion, setAnswersAll, setFlags } from '@/store/slices/user/userSlice';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Index = ({ qn, before, after }: any) => {
  const dispatch = useAppDispatch();
  const flags = useAppSelector((state: any) => state.user.flag);
  const answersAll = useAppSelector((state: any) => state.user.answersAll);
  const currentQuestion = useAppSelector((state: any) => state.user.currentQuestion);

  const [flag, setFlag] = useState(false);
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    setFlag(flags[qn]);
    setAnswer(answersAll[qn]);
  }, [flags, answersAll]);

  const flagHandler = () => {
    setFlag(!flag);
    dispatch(setFlags(Object.assign({}, flags, { [qn]: !flag })));
  };

  const answerHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim().toLowerCase();
    setAnswer(value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { [qn]: value })));
  };

  return (
    <div id={`q-${qn}`}>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        sx={{ alignItems: 'center', justifyContent: 'space-between', py: 1 }}
        id={`q-${qn}`}
      >
        <Paper elevation={0}>
          <Stack direction="row" alignItems="center">
            {before}
            <div className={`text-field ${currentQuestion == qn && 'active'}`}>
              <TextField
                autoComplete='off'
                spellCheck="false"
                margin="normal"
                placeholder={qn}
                value={answer}
                onChange={answerHandler}
                onClick={() => dispatch(setCurrentQuestion(qn))}
                id={`${flag && currentQuestion == qn && 'input-active-flag'}`}
              />
            </div>
            {after}
          </Stack>
        </Paper>
        <div onClick={flagHandler} className={`flag ${currentQuestion == qn && 'active'}`}>
          {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
        </div>
      </Stack>
    </div>
  );
};

export default Index;