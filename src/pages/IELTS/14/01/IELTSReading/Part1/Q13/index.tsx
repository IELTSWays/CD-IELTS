import { useState } from "react";

// mtu
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion } from '@/store/slices/user/userSlice'
// store

const index = ({ qn }: any) => {

  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const options = [
    { text: "TRUE", value: "P01", selected: false },
    { text: "FALSE", value: "P02", selected: false },
    { text: "NOT GIVEN", value: "P03", selected: false },
  ];

  const [value, setValue] = useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

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
          <strong className={`question-now ${currentQuestion == qn && 'active'} `}> {qn} </strong>
          <Typography sx={{ px: 1 }}>
          People nowadays regard children’s play as less significant than they did in the past.
          </Typography>
        </Typography>
      </Paper>
      <Paper elevation={0}>
        <Stack direction="row" alignItems="center">
          <FormControl>
            <RadioGroup
              value={value}
              onChange={handleChange}
            >
              {options.map((i) => {
                return (
                  <FormControlLabel value={i.value} control={<Radio />} label={i.text} />
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