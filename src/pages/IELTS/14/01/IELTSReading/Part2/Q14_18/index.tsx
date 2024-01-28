import { useState } from "react";

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
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, setFlags } from '@/store/slices/user/userSlice'
// store

const questions = [
  { id: 14, title: 'a description of how people misused a bike-sharing scheme' },
  { id: 15, title: 'an explanation of why a proposed bike-sharing scheme was turned down' },
  { id: 16, title: 'a reference to a person being unable to profit their work' },
  { id: 17, title: 'an explanation of the potential savings a bike-sharing scheme would bring' },
  { id: 18, title: 'a reference to the problems a bike-sharing scheme was intended to solve' }
]

const options = [
  { label: 'A', value: "A", },
  { label: 'B', value: "B", },
  { label: 'C', value: "C", },
  { label: 'D', value: "D", },
  { label: 'E', value: "E", },
  { label: 'F', value: "F", },
  { label: 'G', value: "G", },
];

const index = () => {

  const dispatch = useAppDispatch();

  const flags = useAppSelector((state: any) => state.user.flag)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const [flag, setFlag] = useState(flags['14'])

  const [answer14, setAnswer14] = useState(answersAll['00014']);
  const [answer15, setAnswer15] = useState(answersAll['00015']);
  const [answer16, setAnswer16] = useState(answersAll['00016']);
  const [answer17, setAnswer17] = useState(answersAll['00017']);
  const [answer18, setAnswer18] = useState(answersAll['00018']);

  const handleChange14 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer14((event.target as HTMLInputElement).value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00014': ((event.target as HTMLInputElement).value) })))
    dispatch(setCurrentQuestion('00014'))
  };

  const handleChange15 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer15((event.target as HTMLInputElement).value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00015': ((event.target as HTMLInputElement).value) })))
    dispatch(setCurrentQuestion('00015'))
  };

  const handleChange16 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer16((event.target as HTMLInputElement).value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00016': ((event.target as HTMLInputElement).value) })))
    dispatch(setCurrentQuestion('00016'))
  };

  const handleChange17 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer17((event.target as HTMLInputElement).value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00017': ((event.target as HTMLInputElement).value) })))
    dispatch(setCurrentQuestion('00017'))
  };

  const handleChange18 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer18((event.target as HTMLInputElement).value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00018': ((event.target as HTMLInputElement).value) })))
    dispatch(setCurrentQuestion('00018'))
  };

  const flagHandler14 = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '14': !flag })))
  }

  const flagHandler15 = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '15': !flag })))
  }

  const flagHandler16 = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '16': !flag })))
  }

  const flagHandler17 = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '17': !flag })))
  }

  const flagHandler18 = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '18': !flag })))
  }

  return (
    <Card variant="outlined">
      <CardContent sx={{ p: 3 }}>
        <div className='ielts-answersTable'>

          <Stack
            direction="row"
            spacing={2}
            id="ielts-answersTable-first"
          >
            <Paper>{" "}</Paper>
            <RadioGroup
              row
            >
              <FormControlLabel control={<Radio />} label="A" />
              <FormControlLabel control={<Radio />} label="B" />
              <FormControlLabel control={<Radio />} label="C" />
              <FormControlLabel control={<Radio />} label="D" />
              <FormControlLabel control={<Radio />} label="E" />
              <FormControlLabel control={<Radio />} label="F" />
              <FormControlLabel control={<Radio />} label="G" />
            </RadioGroup>
            <div className={`flag`}>
              {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
            </div>
          </Stack>

          {/************************* [14] *************************/}
          <Stack
            direction="row"
            spacing={2}
            id={`q-${questions[0].id}`}
          >
            <Paper>
              <strong className={`question-now ${currentQuestion == questions[0].id && 'active'} `}>
                {questions[0].id}
              </strong>
              <Typography sx={{ px: 1 }}> {questions[0].title} </Typography>
            </Paper>
            <RadioGroup
              row
            >
              <RadioGroup
                value={answer14}
                onChange={handleChange14}
              >
                {options.map((i) => {
                  return (
                    <FormControlLabel
                      value={i.value}
                      control={<Radio />}
                      label={undefined}
                    />
                  )
                })}
              </RadioGroup>
            </RadioGroup>
            <div onClick={() => flagHandler14()} className={`flag ${currentQuestion == 14 && 'active'}`}>
              {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
            </div>
          </Stack>
          {/************************* [15] *************************/}
          <Stack
            direction="row"
            spacing={2}
            id={`q-${questions[1].id}`}
          >
            <Paper>
              <strong className={`question-now ${currentQuestion == questions[1].id && 'active'} `}>
                {questions[1].id}
              </strong>
              <Typography sx={{ px: 1 }}> {questions[1].title} </Typography>
            </Paper>
            <RadioGroup
              row
            >
              <RadioGroup
                value={answer15}
                onChange={handleChange15}
              >
                {options.map((i) => {
                  return (
                    <FormControlLabel
                      value={i.value}
                      control={<Radio />}
                      label={undefined}
                    />
                  )
                })}
              </RadioGroup>
            </RadioGroup>
            <div onClick={() => flagHandler15()} className={`flag ${currentQuestion == 15 && 'active'}`}>
              {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
            </div>
          </Stack>
          {/************************* [16] *************************/}
          <Stack
            direction="row"
            spacing={2}
            id={`q-${questions[2].id}`}
          >
            <Paper>
              <strong className={`question-now ${currentQuestion == questions[2].id && 'active'} `}>
                {questions[2].id}
              </strong>
              <Typography sx={{ px: 1 }}> {questions[2].title} </Typography>
            </Paper>
            <RadioGroup
              row
            >
              <RadioGroup
                value={answer16}
                onChange={handleChange16}
              >
                {options.map((i) => {
                  return (
                    <FormControlLabel
                      value={i.value}
                      control={<Radio />}
                      label={undefined}
                    />
                  )
                })}
              </RadioGroup>
            </RadioGroup>
            <div onClick={() => flagHandler16()} className={`flag ${currentQuestion == 16 && 'active'}`}>
              {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
            </div>
          </Stack>
          {/************************* [17] *************************/}
          <Stack
            direction="row"
            spacing={2}
            id={`q-${questions[3].id}`}
          >
            <Paper>
              <strong className={`question-now ${currentQuestion == questions[3].id && 'active'} `}>
                {questions[3].id}
              </strong>
              <Typography sx={{ px: 1 }}> {questions[3].title} </Typography>
            </Paper>
            <RadioGroup
              row
            >
              <RadioGroup
                value={answer17}
                onChange={handleChange17}
              >
                {options.map((i) => {
                  return (
                    <FormControlLabel
                      value={i.value}
                      control={<Radio />}
                      label={undefined}
                    />
                  )
                })}
              </RadioGroup>
            </RadioGroup>
            <div onClick={() => flagHandler17()} className={`flag ${currentQuestion == 17 && 'active'}`}>
              {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
            </div>
          </Stack>
          {/************************* [18] *************************/}
          <Stack
            direction="row"
            spacing={2}
            id={`q-${questions[4].id}`}
          >
            <Paper>
              <strong className={`question-now ${currentQuestion == questions[4].id && 'active'} `}>
                {questions[4].id}
              </strong>
              <Typography sx={{ px: 1 }}> {questions[4].title} </Typography>
            </Paper>
            <RadioGroup
              row
            >
              <RadioGroup
                value={answer18}
                onChange={handleChange18}
              >
                {options.map((i) => {
                  return (
                    <FormControlLabel
                      value={i.value}
                      control={<Radio />}
                      label={undefined}
                    />
                  )
                })}
              </RadioGroup>
            </RadioGroup>
            <div onClick={() => flagHandler18()} className={`flag ${currentQuestion == 18 && 'active'}`}>
              {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
            </div>
          </Stack>
        </div>
      </CardContent>
    </Card>
  );
};

export default index;