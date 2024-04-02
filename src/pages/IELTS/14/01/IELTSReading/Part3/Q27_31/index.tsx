import React from "react";
import { useState } from "react";

// mtu
import Chip from '@mui/material/Chip';
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
// mtu

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, setFlags } from '@/store/slices/user/userSlice'
// store

const questions = [
  { id: 27, title: 'Hotel managers need to know what would encourage good staff to remain.' },
  { id: 28, title: 'The actions of managers may make staff feel they shouldn’t move to a different employer.' },
  { id: 29, title: 'Little is done in the hospitality industry to help workers improve their skills.' },
  { id: 30, title: 'Staff are less likely to change jobs if cooperation is encouraged.' },
  { id: 31, title: 'Dissatisfaction with pay is not the only reason why hospitality workers change jobs.' }
]

const options = [
  { label: 'A', value: "a", },
  { label: 'B', value: "b", },
  { label: 'C', value: "c", },
  { label: 'D', value: "d", },
  { label: 'E', value: "e", },
  { label: 'F', value: "f", },
  { label: 'G', value: "g", },
];

const index = () => {

  const dispatch = useAppDispatch();

  const flags = useAppSelector((state: any) => state.user.flag)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const [flag, setFlag] = useState(flags['27'])

  const [answer27, setAnswer27] = useState(answersAll['27']);
  const [answer28, setAnswer28] = useState(answersAll['28']);
  const [answer29, setAnswer29] = useState(answersAll['29']);
  const [answer30, setAnswer30] = useState(answersAll['30']);
  const [answer31, setAnswer31] = useState(answersAll['31']);

  const handleChange27 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer27((event.target as HTMLInputElement).value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '27': ((event.target as HTMLInputElement).value) })))
    dispatch(setCurrentQuestion('27'))
  };

  const handleChange28 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer28((event.target as HTMLInputElement).value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '28': ((event.target as HTMLInputElement).value) })))
    dispatch(setCurrentQuestion('28'))
  };

  const handleChange29 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer29((event.target as HTMLInputElement).value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '29': ((event.target as HTMLInputElement).value) })))
    dispatch(setCurrentQuestion('29'))
  };

  const handleChange30 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer30((event.target as HTMLInputElement).value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '30': ((event.target as HTMLInputElement).value) })))
    dispatch(setCurrentQuestion('30'))
  };

  const handleChange31 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer31((event.target as HTMLInputElement).value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '31': ((event.target as HTMLInputElement).value) })))
    dispatch(setCurrentQuestion('31'))
  };

  const flagHandler27 = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '27': !flag })))
  }

  const flagHandler28 = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '28': !flag })))
  }

  const flagHandler29 = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '29': !flag })))
  }

  const flagHandler30 = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '30': !flag })))
  }

  const flagHandler31 = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '31': !flag })))
  }

  const topLabels = [
    { title: "Pfeffer", },
    { title: "Lucas", },
    { title: "Maroudas et al", },
    { title: "Ng and Sorensen", },
    { title: "provide a handout", },
    { title: "Enz and Siguaw", },
    { title: "Deery", },
  ]

  return (
    <Card variant="outlined">
      <CardContent sx={{ p: 3 }}>
        <div className='ielts-answersTable'>
          <div className="ielts-answersTable top-labels">

            {topLabels.map((i, index) => {
              return (
                <Chip key={index} label={i.title} variant="outlined" />
              )
            })}

          </div>
          {/************************* [27] *************************/}
          <div id="q-261">
            <Stack
              direction="row"
              spacing={2}
              id={`q-${questions[0].id}`}
            >
              <Paper>
                <strong className={`question-now ${flag && 'active-flag'} ${currentQuestion == questions[0].id && 'active'} `}>
                  {questions[0].id}
                </strong>
                <Typography sx={{ px: 1 }}> {questions[0].title} </Typography>
              </Paper>
              <RadioGroup
                row
              >
                <RadioGroup
                  value={answer27}
                  onChange={handleChange27}
                >
                  {options.map((i) => {
                    return (
                      <FormControlLabel
                        value={i.value}
                        control={<Radio />}
                        label={i.label}
                      />
                    )
                  })}
                </RadioGroup>
              </RadioGroup>
              <div onClick={() => flagHandler27()} className={`flag ${currentQuestion == 27 && 'active'}`}>
                {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
              </div>
            </Stack>
          </div>
          {/************************* [28] *************************/}
          <Stack
            direction="row"
            spacing={2}
            id={`q-${questions[1].id}`}
          >
            <Paper>
              <strong className={`question-now ${flag && 'active-flag'} ${currentQuestion == questions[1].id && 'active'} `}>
                {questions[1].id}
              </strong>
              <Typography sx={{ px: 1 }}> {questions[1].title} </Typography>
            </Paper>
            <RadioGroup
              row
            >
              <RadioGroup
                value={answer28}
                onChange={handleChange28}
              >
                {options.map((i) => {
                  return (
                    <FormControlLabel
                      value={i.value}
                      control={<Radio />}
                      label={i.label}
                    />
                  )
                })}
              </RadioGroup>
            </RadioGroup>
            <div onClick={() => flagHandler28()} className={`flag ${currentQuestion == 28 && 'active'}`}>
              {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
            </div>
          </Stack>
          {/************************* [29] *************************/}
          <Stack
            direction="row"
            spacing={2}
            id={`q-${questions[2].id}`}
          >
            <Paper>
              <strong className={`question-now ${flag && 'active-flag'} ${currentQuestion == questions[2].id && 'active'} `}>
                {questions[2].id}
              </strong>
              <Typography sx={{ px: 1 }}> {questions[2].title} </Typography>
            </Paper>
            <RadioGroup
              row
            >
              <RadioGroup
                value={answer29}
                onChange={handleChange29}
              >
                {options.map((i) => {
                  return (
                    <FormControlLabel
                      value={i.value}
                      control={<Radio />}
                      label={i.label}
                    />
                  )
                })}
              </RadioGroup>
            </RadioGroup>
            <div onClick={() => flagHandler29()} className={`flag ${currentQuestion == 29 && 'active'}`}>
              {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
            </div>
          </Stack>
          {/************************* [30] *************************/}
          <Stack
            direction="row"
            spacing={2}
            id={`q-${questions[3].id}`}
          >
            <Paper>
              <strong className={`question-now ${flag && 'active-flag'} ${currentQuestion == questions[3].id && 'active'} `}>
                {questions[3].id}
              </strong>
              <Typography sx={{ px: 1 }}> {questions[3].title} </Typography>
            </Paper>
            <RadioGroup
              row
            >
              <RadioGroup
                value={answer30}
                onChange={handleChange30}
              >
                {options.map((i) => {
                  return (
                    <FormControlLabel
                      value={i.value}
                      control={<Radio />}
                      label={i.label}
                    />
                  )
                })}
              </RadioGroup>
            </RadioGroup>
            <div onClick={() => flagHandler30()} className={`flag ${currentQuestion == 30 && 'active'}`}>
              {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
            </div>
          </Stack>
          {/************************* [31] *************************/}
          <Stack
            direction="row"
            spacing={2}
            id={`q-${questions[4].id}`}
          >
            <Paper>
              <strong className={`question-now ${flag && 'active-flag'} ${currentQuestion == questions[4].id && 'active'} `}>
                {questions[4].id}
              </strong>
              <Typography sx={{ px: 1 }}> {questions[4].title} </Typography>
            </Paper>
            <RadioGroup
              row
            >
              <RadioGroup
                value={answer31}
                onChange={handleChange31}
              >
                {options.map((i) => {
                  return (
                    <FormControlLabel
                      value={i.value}
                      control={<Radio />}
                      label={i.label}
                    />
                  )
                })}
              </RadioGroup>
            </RadioGroup>
            <div onClick={() => flagHandler31()} className={`flag ${currentQuestion == 31 && 'active'}`}>
              {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
            </div>
          </Stack>
        </div>
      </CardContent>
    </Card>
  );
};

export default index;