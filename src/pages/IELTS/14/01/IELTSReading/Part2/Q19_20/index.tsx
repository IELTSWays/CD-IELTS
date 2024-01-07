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
      text: "It was initially opposed by a government department.",
      value: "P06",
      selected: false
    },
    {
      text: "It failed when a partner in the scheme withdrew support.",
      value: "P07",
      selected: false
    },
    {
      text: "It aimed to be more successful than the Copenhagen scheme.",
      value: "P08",
      selected: false
    },
    {
      text: "It was made possible by a change in people’s attitudes.",
      value: "P09",
      selected: false
    },
    {
      text: "It attracted interest from a range of bike designers.",
      value: "P10",
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
          <strong className={`question-now ${currentQuestion == 19 && 'active'} `}> 19 - 20 </strong>
          <Typography sx={{ px: 1 }}> Which </Typography>
          <strong className='uppercase'> two </strong>
          <Typography sx={{ pl: 1 }}> of the following statements are made in the text about the Amsterdam bike-sharing scheme of 1999? </Typography>
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