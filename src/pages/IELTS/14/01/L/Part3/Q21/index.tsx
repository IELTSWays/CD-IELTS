import React from "react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, setFlags } from '@/store/slices/user/userSlice'

const index = ({ qn }: any) => {

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const flags = useAppSelector((state: any) => state.user.flag)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state: any) => state.user.currentQuestion)

  const options = [
    { label: t('00052'), value: "a", },
    { label: t('00053'), value: "b", },
    { label: t('00054'), value: "c", },
  ];

  const [flag, setFlag] = useState(flags['21'])
  // answer, setAnswer
  const [answer, setAnswer] = useState(answersAll['21']);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer((event.target as HTMLInputElement).value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '21': ((event.target as HTMLInputElement).value) })))
  };

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '21': !flag })))
  }

  return (
    <div id="q-201">

      <Box id={`q-${qn}`}>
        <Typography>
          <h3> Questions 21 - 25 </h3>
        </Typography>
        <Typography className='italic'>
          Choose the correct answer.
        </Typography>
      </Box>

      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="column"
        useFlexGap
        flexWrap="wrap"
        sx={{ py: 1 }}
        className="radio-select"
      >
        <div className="align-items-start justify-content-space-between type-radio">
          <Paper elevation={0}>
            <Typography>
              <strong className={`question-now ${flag && 'active-flag'} ${currentQuestion == qn && 'active'} `}> {qn} </strong>
              <Typography sx={{ px: 1 }} className="question"> {t('00051')} </Typography>
            </Typography>
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
                {options.map((i) => {
                  return (
                    <FormControlLabel
                      value={i.value}
                      control={<Radio />}
                      label={i.label}
                      onClick={() => dispatch(setCurrentQuestion(21))}
                    />
                  )
                })}
              </RadioGroup>
            </FormControl>
          </Stack>
        </Paper>
      </Stack>
    </div>
  );
};

export default index;