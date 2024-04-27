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

const index = ({ qn, question, checkList }: any) => {

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const flags = useAppSelector((state: any) => state.user.flag)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state: any) => state.user.currentQuestion)

  const [flag, setFlag] = useState(flags[qn])

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { [qn]: !flag })))
  }

  let init: never[];
  if (answersAll[qn] == null) {
    init = []
  }
  else {
    init = answersAll[qn]
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
      [qn]: checked,
      [parseInt(qn) + 1]: checked
    })))
  }, [checked]);

  return (
    <div>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="column"
        useFlexGap
        flexWrap="wrap"
        className="multi-choice"
        sx={{ py: 1 }}
        id={`q-${qn}`}
      >
        <div className="align-items-start justify-content-space-between">
          <Paper elevation={0}>
            <Typography>
              <strong className={`question-now ${flag && 'active-flag'} ${currentQuestion == qn && 'active'} `}> {qn} - {parseInt(qn) + 1} </strong>
              <Typography sx={{ pl: 1 }}> Which <strong className='uppercase mx-5'> two </strong> {question} </Typography>
            </Typography>
          </Paper>
          <div onClick={() => flagHandler()} className={`flag ${currentQuestion == qn && 'active'}`}>
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
                    onClick={() => dispatch(setCurrentQuestion(qn))}
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