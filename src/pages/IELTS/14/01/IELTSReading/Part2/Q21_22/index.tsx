import { useState, useEffect } from "react";

// mtu
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, } from '@/store/slices/user/userSlice'
// store

const index = ({ qn }: any) => {

  const dispatch = useAppDispatch();

  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const [answer, setAnswer] = useState<any>(answersAll['00021'])

  const [state, setState] = useState({
    A: false,
    B: false,
    C: false,
    D: false,
    E: false
  });

  useEffect(() => {
    if (answer !== null) {
      setState(answer)
    }
  }, []);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    setAnswer({
      ...state,
      [event.target.name]: event.target.checked,
    })
    dispatch(setAnswersAll(Object.assign({}, answersAll, {
      '00021': {
        ...state,
        [event.target.name]: event.target.checked,
      }
    })))
  };

  const list = [
    { value: state?.A, name: 'A', label: 'The majority of residents would like to prevent all cars from entering the city.' },
    { value: state?.B, name: 'B', label: 'There is little likelihood of the city having another bike-sharing scheme.' },
    { value: state?.C, name: 'C', label: 'More trips in the city are made by bike than by any other form of transport.' },
    { value: state?.D, name: 'D', label: 'A bike-sharing scheme would benefit residents who use public transport.' },
    { value: state?.E, name: 'E', label: 'The city has a reputation as a place that welcomes cyclists.' },
  ]

  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="column"
      useFlexGap
      flexWrap="wrap"
      sx={{ py: 1 }}
      id={`q-${qn}`}
    >
      <Paper elevation={0}>
        <Typography>
          <strong className={`question-now ${currentQuestion == 21 && 'active'} `}> 21 - 22 </strong>
          <Typography sx={{ px: 1 }}> Which </Typography>
          <strong className='uppercase'> two </strong>
          <Typography sx={{ pl: 1 }}> of the following statements are made in the text about Amsterdam today? </Typography>
        </Typography>
      </Paper>
      <Paper elevation={0}>
        <Stack direction="row" alignItems="center">
          <FormControl variant="standard">
            {state &&
              <FormGroup>
                {list.map((i) => {
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={(i.name)}
                          checked={i.value}
                          onChange={handleChange}
                          onClick={() => dispatch(setCurrentQuestion(21))}
                        />
                      }
                      label={i.label}
                    />
                  )
                })}
              </FormGroup>
            }
          </FormControl>
        </Stack>
      </Paper>
    </Stack>
  )
};

export default index;