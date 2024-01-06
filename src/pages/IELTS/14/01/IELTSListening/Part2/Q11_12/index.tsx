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
    { text: t('00030'), value: "P01", selected: false },
    { text: t('00031'), value: "P02", selected: false },
    { text: t('00032'), value: "P03", selected: false },
    { text: t('00033'), value: "P04", selected: false },
    { text: t('00034'), value: "P05", selected: false }
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
          <strong className={`question-now ${currentQuestion == 11 && 'active'} `}> 11 - 12 </strong>
          <Typography sx={{ px: 1 }}> {t('00028')} </Typography>
          <strong className='uppercase'> two </strong>
          <Typography sx={{ pl: 1 }}> {t('00029')} </Typography>
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