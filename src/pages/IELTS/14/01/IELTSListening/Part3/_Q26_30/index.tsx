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
  { id: 26, title: 'Historical background' },
  { id: 27, title: 'Geographical factors' },
  { id: 28, title: 'Past mistakes' },
  { id: 29, title: 'Future risks' },
  { id: 30, title: 'International implications' }
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

  const [flag, setFlag] = useState(flags['26'])

  const [answer26, setAnswer26] = useState(answersAll['00026']);
  const [answer27, setAnswer27] = useState(answersAll['00027']);
  const [answer28, setAnswer28] = useState(answersAll['00028']);
  const [answer29, setAnswer29] = useState(answersAll['00029']);
  const [answer30, setAnswer30] = useState(answersAll['00030']);

  const handleChange26 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer26((event.target as HTMLInputElement).value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00026': ((event.target as HTMLInputElement).value) })))
    dispatch(setCurrentQuestion('00026'))
  };

  const handleChange27 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer27((event.target as HTMLInputElement).value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00027': ((event.target as HTMLInputElement).value) })))
    dispatch(setCurrentQuestion('00027'))
  };

  const handleChange28 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer28((event.target as HTMLInputElement).value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00028': ((event.target as HTMLInputElement).value) })))
    dispatch(setCurrentQuestion('00028'))
  };

  const handleChange29 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer29((event.target as HTMLInputElement).value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00029': ((event.target as HTMLInputElement).value) })))
    dispatch(setCurrentQuestion('00029'))
  };

  const handleChange30 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer30((event.target as HTMLInputElement).value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00030': ((event.target as HTMLInputElement).value) })))
    dispatch(setCurrentQuestion('00030'))
  };

  const flagHandler26 = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '26': !flag })))
  }

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

  const topLabels = [
    { title: "use visuals", },
    { title: "keep it short", },
    { title: "involve other students", },
    { title: "check the information is accurate", },
    { title: "provide a handout", },
    { title: "focus on one example", },
    { title: "do online research", },
  ]

  return (
    <Card variant="outlined">
      <CardContent sx={{ p: 3 }}>
        <div className='ielts-answersTable listening'>
          <div className="ielts-answersTable top-labels">

              {topLabels.map((i, index) => {
                return (
                  <Chip  key={index} label={i.title} variant="outlined" />
                )
              })}

          </div>
          {/************************* [26] *************************/}
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
                value={answer26}
                onChange={handleChange26}
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
            <div onClick={() => flagHandler26()} className={`flag ${currentQuestion == 26 && 'active'}`}>
              {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
            </div>
          </Stack>
          {/************************* [27] *************************/}
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
          {/************************* [28] *************************/}
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
        </div>
      </CardContent>
    </Card>
  );
};

export default index;