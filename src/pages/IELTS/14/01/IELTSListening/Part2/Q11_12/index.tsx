import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
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

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)


  const [answer, setAnswer] = useState<any>(answersAll['00011'])

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
      '00011': {
        ...state,
        [event.target.name]: event.target.checked,
      }
    })))
  };

  const list = [
    { value: state?.A, name: 'A', label: t('00030') },
    { value: state?.B, name: 'B', label: t('00031') },
    { value: state?.C, name: 'C', label: t('00032') },
    { value: state?.D, name: 'D', label: t('00033') },
    { value: state?.E, name: 'E', label: t('00034') },
  ]

  console.log(state);

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
          <strong className={`question-now ${currentQuestion == 11 && 'active'} `}> 11 - 12 </strong>
          <Typography sx={{ px: 1 }}> {t('00028')} </Typography>
          <strong className='uppercase'> two </strong>
          <Typography sx={{ pl: 1 }}> {t('00029')} </Typography>
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
                          onClick={() => dispatch(setCurrentQuestion(11))}
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