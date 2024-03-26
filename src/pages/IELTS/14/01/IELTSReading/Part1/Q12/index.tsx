import React from "react";
import { useState, useEffect } from "react";

// mtu
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, setAccordion, setFlags } from '@/store/slices/user/userSlice'
// store

const Accordion = styled((props: any) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />))(() => ({
  }));

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
  const currentQuestion = useAppSelector((state: any) => state.user.currentQuestion)
  const accordionState = useAppSelector((state: any) => state.user.accordion)

  const [expanded, setExpanded] = useState(false);

  const options = [
    { label: 'YES', value: "a", },
    { label: 'NO', value: "b", },
    { label: 'NOT GIVEN', value: "c", },
  ];

  const [flag, setFlag] = useState(flags['12'])
  const [answer, setAnswer] = useState(answersAll['12']);

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '12': !flag })))
  }

  const handleChange = () => {
    dispatch(setAccordion('12'))
    setExpanded(!expanded)
    dispatch(setCurrentQuestion(12))
  }

  const handleChangeItems = (event: any) => {
    setAnswer((event.target as HTMLInputElement).value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '12': ((event.target as HTMLInputElement).value) })))
  }

  useEffect(() => {
    if (accordionState !== '12') {
      setExpanded(false)
    }
  }, [accordionState])

  return (
    <div className="d-flex">
      <Accordion
        id={`q-${qn}`}
        expanded={accordionState === '12' && expanded}
        onChange={() => handleChange()}
      >
        <AccordionSummary
          onClick={() => handleChange()}
        >
          <Paper elevation={0}>
            <Typography>
              <strong className={`question-now ${currentQuestion == qn && 'active'} `}> {qn} </strong>
              <Typography sx={{ px: 1 }}>
                Children had problems thinking up ideas when they first created the story with Lego.
              </Typography>
            </Typography>
          </Paper>
        </AccordionSummary>
        <div className="p-20">
          <Paper elevation={0}>
            <Stack direction="row" alignItems="center">
              <FormControl>
                <RadioGroup
                  value={answer}
                  onChange={handleChangeItems}
                >
                  {options.map((i) => {
                    return (
                      <FormControlLabel
                        value={i.value}
                        control={<Radio />}
                        label={i.label}
                        onClick={() => dispatch(setCurrentQuestion(12))}
                      />
                    )
                  })}
                </RadioGroup>
              </FormControl>
            </Stack>
          </Paper>
        </div>
      </Accordion>

      <div onClick={() => flagHandler()} className={`flag ${currentQuestion == qn && 'active'}`}>
        {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
      </div>
    </div>
  );
}

export default index