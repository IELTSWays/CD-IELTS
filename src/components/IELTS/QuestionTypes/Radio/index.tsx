import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { setCurrentQuestion, setAnswersAll, setFlags } from '@/store/slices/user/userSlice';

const Index = ({ qn, title, options }: { qn: string; title: string; options: { value: string; label: string; }[] }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { flag, answersAll, currentQuestion } = useAppSelector((state: any) => state.user);
  const [flagState, setFlag] = useState(flag[qn]);
  const [answer, setAnswer] = useState(answersAll[qn]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAnswer(value);
    dispatch(setAnswersAll({ ...answersAll, [qn]: value }));
  };

  const flagHandler = () => {
    setFlag(prevFlag => !prevFlag);
    dispatch(setFlags({ ...flag, [qn]: !flagState }));
  };

  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="column"
      useFlexGap
      flexWrap="wrap"
      sx={{ py: 1 }}
      id={`q-${qn}`}
      className={`radio-select`}
    >
      <div className={`align-items-start justify-content-space-between type-radio`}>
        <Paper elevation={0}>
          <Typography>
            <strong className={`question-now ${flagState && 'active-flag'} ${currentQuestion == qn && 'active'}`}>{qn}</strong>
            <Typography sx={{ px: 1 }} className="question">{title}</Typography>
          </Typography>
        </Paper>
        <div onClick={flagHandler} className={`flag ${flagState && currentQuestion == qn && 'active'}`}>
          {flagState ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
        </div>
      </div>
      <Paper elevation={0}>
        <Stack direction="row" alignItems="center" className="ielts-checkbox">
          <FormControl>
            <RadioGroup value={answer} onChange={handleChange}>
              {options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                  onClick={() => dispatch(setCurrentQuestion(qn))}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Index;