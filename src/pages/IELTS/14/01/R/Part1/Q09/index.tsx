import React from "react";
import { useState } from "react";

// mtu
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, setFlags } from '@/store/slices/user/userSlice'
// store

const index = ({ qn }: any) => {

  const dispatch = useAppDispatch();

  const flags = useAppSelector((state: any) => state.user.flag)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const options = [
    { label: 'TRUE', value: "a", },
    { label: 'FALSE', value: "b", },
    { label: 'NOT GIVEN', value: "c", },
  ];

  const [flag, setFlag] = useState(flags['9'])
  const [answer, setAnswer] = useState(answersAll['9']);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer((event.target as HTMLInputElement).value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '9': ((event.target as HTMLInputElement).value) })))
  };

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '9': !flag })))
  }

  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="column"
      useFlexGap
      flexWrap="wrap"
      sx={{ py: 1 }}
      id={`q-${qn}`}
      className="radio-select"
    >
      <div className="align-items-start justify-content-space-between type-radio">
        <Paper elevation={0} sx={{ display: 'flex' }}>
          <strong className={`question-now ${flag && 'active-flag'} ${currentQuestion == qn && 'active'} `}> {qn} </strong>
          <Typography sx={{ px: 1 }} className="question">
            Children with good self-control are known to be likely to do well at school later on.
          </Typography>
        </Paper>
        <div onClick={() => flagHandler()} className={`flag ${currentQuestion == qn && 'active'}`}>
          {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
        </div>
      </div>
      <Paper elevation={0}>
        <Stack direction="row" alignItems="center">
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
                    onClick={() => dispatch(setCurrentQuestion(9))}
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