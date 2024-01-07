import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
// mtu
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion } from '@/store/slices/user/userSlice'
// store

import QMultiCheckBox from '@/components/IELTS/QMultiCheckBox';


const index = ({ qn }: any) => {

  const { t } = useTranslation();
  const dispatch = useAppDispatch()
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const options = [
    {
      text: "The majority of residents would like to prevent all cars from entering the city.",
      value: "P11",
      selected: false
    },
    {
      text: "There is little likelihood of the city having another bike-sharing scheme.",
      value: "P12",
      selected: false
    },
    {
      text: "More trips in the city are made by bike than by any other form of transport.",
      value: "P13",
      selected: false
    },
    {
      text: "A bike-sharing scheme would benefit residents who use public transport.",
      value: "P14",
      selected: false
    },
    {
      text: "The city has a reputation as a place that welcomes cyclists.",
      value: "P15",
      selected: false
    }
  ];

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
          <FormGroup>
            {options.map((i) => {
              return (
                <FormControlLabel control={<Checkbox />} label={i.text} />
              )
            })}
          </FormGroup>
        </Stack>
      </Paper>
    </Stack>
  )
};

export default index;