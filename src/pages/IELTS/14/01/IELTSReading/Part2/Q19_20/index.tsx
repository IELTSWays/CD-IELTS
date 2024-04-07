import React from "react";
import { useState, useEffect } from "react";

// mtu
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, setFlags } from '@/store/slices/user/userSlice'
// store

const AccordionSummary = styled((props: any) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon />}
    {...props}
  />
))(() => ({
}));

const index = ({ qn }: any) => {

  const dispatch = useAppDispatch();

  const flags = useAppSelector((state: any) => state.user.flag)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)
  const [flag, setFlag] = useState(flags['19'])

  const checkList = [
    { label: 'It was initially opposed by a government department.', value: "a", },
    { label: 'It failed when a partner in the scheme withdrew support.', value: "b", },
    { label: 'It aimed to be more successful than the Copenhagen scheme.', value: "c", },
    { label: 'It was made possible by a change in people’s attitudes.', value: "d", },
    { label: 'It attracted interest from a range of bike designers.', value: "e", },
  ];

  let init: any;
  if (answersAll['19'] == null) {
    init = []
  }
  else {
    init = answersAll['19']
  }

  const [checked, setChecked] = useState(init);

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '19': !flag })))
  }

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
      '19': checked,
      '20': checked
    })))
  }, [checked]);

  return (
    <div className="d-flex">
      <div
        id={`q-${qn}`}
      >
        <AccordionSummary
        >
          <Paper elevation={0}>
            <Typography>
              <strong className={`question-now ${flag && 'active-flag'} ${currentQuestion == 19 && 'active'} `}> 19 - 20 </strong> Which two of the following statements are made in the text about the Amsterdam bike-sharing scheme of 1999?
            </Typography>
          </Paper>
        </AccordionSummary>
        <div className="ielts-checkbox">
          {checkList.map((item, index) => (
            <Paper elevation={0} key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    name={(item.value)}
                    checked={checked?.includes(item.value)}
                    value={item.value}
                    onChange={handleCheck}
                    onClick={() => dispatch(setCurrentQuestion(19))}
                  />
                }
                label={item.label}
              />
            </Paper>
          ))}
        </div>
      </div>
      <div onClick={() => flagHandler()} className={`flag ${currentQuestion == 19 && 'active'}`}>
        {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
      </div>
    </div>
  )
}
export default index