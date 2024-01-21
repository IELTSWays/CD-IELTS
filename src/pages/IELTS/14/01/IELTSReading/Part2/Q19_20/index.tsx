import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

// mtu
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
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

  const checkList = [t('00030'), t('00031'), t('00032'), t('00033'), t('00034')];

  let init;
  if (answersAll['00019'] == null) {
    init = []
  }
  else {
    init = answersAll['00019']
  }

  const [checked, setChecked] = useState(init);

  const handleCheck = (event: { target: { checked: any; value: any; }; }) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const checkedItems = checked?.length
    ? checked?.reduce((total: string, item: string) => {
      return total + ", " + item;
    })
    : "";

  if (checked?.length > 2) {
    const array = checkedItems.split(", ");
    const newArray = array.slice(1);
    setChecked(newArray)
  }

  useEffect(() => {
    dispatch(setAnswersAll(Object.assign({}, answersAll, {
      '00019': checked
    })))
  }, [checked]);

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
          <Typography sx={{ px: 1 }}> {t('00028')} </Typography>
          <strong className='uppercase'> two </strong>
          <Typography sx={{ pl: 1 }}> {t('00029')} </Typography>
        </Typography>
      </Paper>
      {checkList.map((item, index) => (
        <Paper elevation={0} key={index}>
          <FormControlLabel
            control={
              <Checkbox
                name={(item)}
                checked={checked?.includes(item)}
                value={item}
                onChange={handleCheck}
                onClick={() => dispatch(setCurrentQuestion(19))}
              />
            }
            label={item}
          />
        </Paper>
      ))}
    </Stack>
  )
};

export default index;