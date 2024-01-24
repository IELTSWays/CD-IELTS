import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

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
// mtu

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setCurrentQuestion, setAnswersAll, setAccordion } from '@/store/slices/user/userSlice'
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

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state: any) => state.user.currentQuestion)
  const accordionState = useAppSelector((state: any) => state.user.accordion)

  const [expanded, setExpanded] = useState(false);

  const options = [
    { label: 'TRUE', value: "A", },
    { label: 'FALSE', value: "B", },
    { label: 'NOT GIVEN', value: "C", },
  ];

  // answer, setAnswer
  const [answer, setAnswer] = useState(answersAll['00034']);

  const handleChange = () => {
    dispatch(setAccordion('00034'))
    setExpanded(!expanded)
    dispatch(setCurrentQuestion(34))
  }

  const handleChangeItems = (event: any) => {
    setAnswer((event.target as HTMLInputElement).value);
    dispatch(setAnswersAll(Object.assign({}, answersAll, { '00034': ((event.target as HTMLInputElement).value) })))
  }

  useEffect(() => {
    if (accordionState !== '00034') {
      setExpanded(false)
    }
  }, [accordionState])

  return (
    <Accordion
      id={`q-${qn}`}
      expanded={accordionState === '00034' && expanded}
      onChange={() => handleChange()}
    >
      <AccordionSummary
        onClick={() => handleChange()}
      >
        <Paper elevation={0}>
          <Typography>
            <strong className={`question-now ${currentQuestion == qn && 'active'} `}> {qn} </strong>
            <Typography sx={{ px: 1 }}>
              {t('00063')}
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
                      onClick={() => dispatch(setCurrentQuestion(34))}
                    />
                  )
                })}
              </RadioGroup>
            </FormControl>
          </Stack>
        </Paper>
      </div>
    </Accordion>
  );
}

export default index