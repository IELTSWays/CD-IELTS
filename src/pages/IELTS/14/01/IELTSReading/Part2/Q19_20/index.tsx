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

  const [answer, setAnswer] = useState<any>(answersAll['00019'])

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
      '00019': {
        ...state,
        [event.target.name]: event.target.checked,
      }
    })))
  };

  const list = [
    { value: state?.A, name: 'A', label: 'It was initially opposed by a government department.' },
    { value: state?.B, name: 'B', label: 'It failed when a partner in the scheme withdrew support.' },
    { value: state?.C, name: 'C', label: 'It aimed to be more successful than the Copenhagen scheme.' },
    { value: state?.D, name: 'D', label: 'It was made possible by a change in people’s attitudes.' },
    { value: state?.E, name: 'E', label: 'It attracted interest from a range of bike designers.' },
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
          <strong className={`question-now ${currentQuestion == 19 && 'active'} `}> 19 - 20 </strong>
          <Typography sx={{ px: 1 }}> Which </Typography>
          <strong className='uppercase'> two </strong>
          <Typography sx={{ pl: 1 }}> of the following statements are made in the text about the Amsterdam bike-sharing scheme of 1999? </Typography>
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
                          onClick={() => dispatch(setCurrentQuestion(19))}
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