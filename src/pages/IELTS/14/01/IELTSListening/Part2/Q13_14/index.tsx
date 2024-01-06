import { useState } from "react";
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

const index = ({ qn }: any) => {

  const { t } = useTranslation();
  const dispatch = useAppDispatch()
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const [listUser, setListUser] = useState([
    {
      Category: "XXX",
      Name: "123",
      Weight: "1"
    },
    {
      Category: "ZZZ",
      Name: "456",
      Weight: "2"
    }
  ]);

  const options = [
    { name: t('00037'), value: "P06", selected: false },
    { name: t('00038'), value: "P07", selected: false },
    { name: t('00039'), value: "P08", selected: false },
    { name: t('00040'), value: "P09", selected: false },
    { name: t('00041'), value: "P10", selected: false }
  ];

  return (
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="column"
      useFlexGap
      flexWrap="wrap"
      id={`q-${qn}`}
    >
      <Paper elevation={0}>
        <Typography>
        <strong className={`question-now ${currentQuestion == 13 && 'active'} `}> 13 - 14 </strong>
          <Typography sx={{ px: 1 }}> {t('00035')} </Typography>
          <strong className='uppercase'> two </strong>
          <Typography sx={{ pl: 1 }}> {t('00036')} </Typography>
        </Typography>
      </Paper>
      <Paper elevation={0}>
        <Stack direction="row" alignItems="center">
          <FormGroup>
            {options.map((t) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={listUser.some((p: any) => p.name === t.name)}
                    onChange={(e) => {
                      if (e.target.checked) setListUser((state) => [...state, t]);
                      else {
                        let list = listUser.filter((o) => o.name !== t.name);
                        setListUser(list);
                      }
                    }}
                  />
                }
                label={t.name}
              />
            ))}
          </FormGroup>

        </Stack>
      </Paper>
    </Stack>
  )
};

export default index;

