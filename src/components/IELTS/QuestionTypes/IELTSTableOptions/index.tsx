import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

// store
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, setFlags } from '@/store/slices/user/userSlice'
// store


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

const index = ({ questions, options = defaultOptions }) => {

  const dispatch = useAppDispatch();
  const flags = useAppSelector((state: any) => state.user.flag);
  const answersAll = useAppSelector((state: any) => state.user.answersAll);
  const currentQuestion = useAppSelector((state: any) => state.user.currentQuestion);

  const [flag, setFlag] = useState({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const { value } = event.target;
    setFlag({ ...flag, [id]: !flag[id] });
    dispatch(setAnswersAll({ ...answersAll, [id]: value }));
    dispatch(setCurrentQuestion(id));
  };

  return (
    <Card variant="outlined">
      <CardContent sx={{ p: 3 }}>
        <div className='ielts-answersTable'>
          {questions.map((question) => (
            <Stack key={question.id} direction="row" spacing={2} id={`q-${question.id}`}>
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
              <div onClick={() => setFlag({ ...flag, [question.id]: !flag[question.id] })} className={`flag ${currentQuestion === question.id && 'active'}`}>
                {flag[question.id] ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
              </div>
            </Stack>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default index;