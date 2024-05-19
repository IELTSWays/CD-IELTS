import React, { useState } from 'react';
import { Paper, Stack, Radio, RadioGroup, FormControlLabel, Typography, Card, CardContent, Chip } from '@mui/material';

import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, setFlags } from '@/store/slices/user/userSlice'

const defaultOptions =
  [
    { label: 'A', value: "a", },
    { label: 'B', value: "b", },
    { label: 'C', value: "c", },
    { label: 'D', value: "d", },
    { label: 'E', value: "e", },
    { label: 'F', value: "f", },
    { label: 'G', value: "g", },
  ]

const index = ({ questions, options = defaultOptions, topLabels }) => {
  const dispatch = useAppDispatch();
  const flags = useAppSelector((state: any) => state.user.flag);
  const answersAll = useAppSelector((state: any) => state.user.answersAll);
  const currentQuestion = useAppSelector((state: any) => state.user.currentQuestion);

  const [flag, setFlag] = useState({});

  const handleChange = (event, id) => {
    const { value } = event.target;
    dispatch(setAnswersAll({ ...answersAll, [id]: value }));
    dispatch(setCurrentQuestion(id));
  };

  const flagHandler = (id) => {
    setFlag({ ...flag, [id]: !flag[id] });
    dispatch(setFlags({ ...flags, [id]: !flag[id] }));
  };

  const renderQuestion = (question) => (
    <div key={question.id} id={`q-${question.id}`}>
      <Stack direction="row" spacing={2}>
        <Paper>
          <strong className={`question-now ${flag[question.id] && 'active-flag'} ${currentQuestion === question.id && 'active'}`}>
            {question.id}
          </strong>
          <Typography sx={{ px: 1 }}> {question.title} </Typography>
        </Paper>
        <RadioGroup row value={answersAll[question.id] || ''} onChange={(event) => handleChange(event, question.id)}>
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
        <div onClick={() => flagHandler(question.id)} className={`flag ${currentQuestion === question.id && 'active'}`}>
          {flag[question.id] ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
        </div>
      </Stack>
    </div>
  );

  const renderTopLabels = () => (
    <div className="ielts-answersTable top-labels">
      {topLabels.map((label, index) => (
        <Chip key={index} label={label.title} variant="outlined" />
      ))}
    </div>
  );

  return (
    <Card variant="outlined">
      <CardContent sx={{ p: 3 }}>
        <div className='ielts-answersTable'>
          {renderTopLabels()}
          {questions.map(renderQuestion)}
        </div>
      </CardContent>
    </Card>
  );
};

export default index;