import React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

// mtu
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, setFlags } from '@/store/slices/user/userSlice'
// store

const index = ({ qn }: any) => {

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const flags = useAppSelector((state: any) => state.user.flag)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state: any) => state.user.currentQuestion)

  const [flag, setFlag] = useState(flags['11'])

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '11': !flag })))
  }

  const checkList = [t('00030'), t('00031'), t('00032'), t('00033'), t('00034')];

  let init;
  if (answersAll['11'] == null) {
    init = []
  }
  else {
    init = answersAll['11']
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
      '11': checked,
      '12': checked
    })))
  }, [checked]);

  return (
    <div id="q-101">
    <Stack
      spacing={{ xs: 1, sm: 2 }}
      direction="column"
      useFlexGap
      flexWrap="wrap"
      className="multi-choice"
      sx={{ py: 1 }}
      id={`q-11`}
    >
      <div className="align-items-start justify-content-space-between">
        <Paper elevation={0}>
          <Typography>
            <strong className={`question-now ${flag && 'active-flag'} ${currentQuestion == 11 && 'active'} `}> 11 - 12 </strong>
            <Typography sx={{ px: 1 }}> {t('00028')} </Typography>
            <strong className='uppercase'> two </strong>
            <Typography sx={{ pl: 1 }}> {t('00029')} </Typography>
          </Typography>
        </Paper>
        <div onClick={() => flagHandler()} className={`flag ${currentQuestion == 11 && 'active'}`}>
          {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
        </div>
      </div>
      <div className="ielts-checkbox">
        {checkList.map((item, index) => (
          <Paper elevation={0} key={index}>
            <FormControlLabel
              control={
                <Checkbox
                  name={(item)}
                  checked={checked?.includes(item)}
                  value={item}
                  onChange={handleCheck}
                  onClick={() => dispatch(setCurrentQuestion(11))}
                />
              }
              label={item}
            />
          </Paper>
        ))}
      </div>
    </Stack>
    </div>
  )
};

export default index;