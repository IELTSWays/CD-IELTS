import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

// mtu
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
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

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const flags = useAppSelector((state: any) => state.user.flag)
  const answersAll = useAppSelector((state: any) => state.user.answersAll)
  const currentQuestion = useAppSelector((state) => state.user.currentQuestion)

  const accordionState = useAppSelector((state: any) => state.user.accordion)
  const [expanded, setExpanded] = useState(false);
  const [flag, setFlag] = useState(flags['21'])

  // const checkList = [
  //   'The majority of residents would like to prevent all cars from entering the city.', 
  //   'There is little likelihood of the city having another bike-sharing scheme.', 
  //   'More trips in the city are made by bike than by any other form of transport.', 
  //   'A bike-sharing scheme would benefit residents who use public transport.', 
  //   'The city has a reputation as a place that welcomes cyclists.'
  // ];

  const checkList = [
    { label: 'The majority of residents would like to prevent all cars from entering the city.', value: "a", },
    { label: 'There is little likelihood of the city having another bike-sharing scheme.', value: "b", },
    { label: 'More trips in the city are made by bike than by any other form of transport.', value: "c", },
    { label: 'A bike-sharing scheme would benefit residents who use public transport.', value: "d", },
    { label: 'The city has a reputation as a place that welcomes cyclists.', value: "e", },
  ];


  let init;
  if (answersAll['00021'] == null) {
    init = []
  }
  else {
    init = answersAll['00021']
  }

  const [checked, setChecked] = useState(init);

  const handleChange = () => {
    dispatch(setAccordion('00021'))
    setExpanded(!expanded)
    dispatch(setCurrentQuestion(21))
  }

  const flagHandler = () => {
    setFlag(!flag)
    dispatch(setFlags(Object.assign({}, flags, { '21': !flag })))
  }

  useEffect(() => {
    if (accordionState !== '00021') {
      setExpanded(false)
    }
  }, [accordionState])

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
      '00021': checked
    })))
  }, [checked]);

  return (
    <div className="d-flex">
      <Accordion
        id={`q-${qn}`}
        expanded={accordionState === '00021' && expanded}
        onChange={() => handleChange()}
        className="w-100p"
      >
        <AccordionSummary
          onClick={() => handleChange()}
        >
          <Paper elevation={0}>
            <Typography>
              <strong className={`question-now ${currentQuestion == 21 && 'active'} `}> 21 - 22 </strong>
              <Typography sx={{ px: 1 }}> Which </Typography>
              <strong className='uppercase'> two </strong>
              <Typography sx={{ pl: 1 }}> of the following statements are made in the text about Amsterdam today? </Typography>
            </Typography>
          </Paper>
        </AccordionSummary>
        <div className="p-20 ielts-checkbox">
          {checkList.map((item, index) => (
            <Paper elevation={0} key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    name={(item.value)}
                    checked={checked?.includes(item.value)}
                    value={item.value}
                    onChange={handleCheck}
                    onClick={() => dispatch(setCurrentQuestion(21))}
                  />
                }
                label={item.label}
              />
            </Paper>
          ))}
        </div>
      </Accordion>
      <div onClick={() => flagHandler()} className={`flag ${currentQuestion == 21 && 'active'}`}>
        {flag ? <BookmarkIcon color={'error'} /> : <BookmarkBorderIcon />}
      </div>
    </div>
  )
}
export default index