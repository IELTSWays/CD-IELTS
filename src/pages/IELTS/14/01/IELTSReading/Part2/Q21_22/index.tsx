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

  const checkList = [t('00037'), t('00038'), t('00039'), t('00040'), t('00041')];

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
              <Typography sx={{ px: 1 }}> {t('00035')} </Typography>
              <strong className='uppercase'> two </strong>
              <Typography sx={{ pl: 1 }}> {t('00036')} </Typography>
            </Typography>
          </Paper>
        </AccordionSummary>
        <div className="p-20">
          {checkList.map((item, index) => (
            <Paper elevation={0} key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    name={(item)}
                    checked={checked?.includes(item)}
                    value={item}
                    onChange={handleCheck}
                    onClick={() => dispatch(setCurrentQuestion(21))}
                  />
                }
                label={item}
              />
            </Paper>
          ))}
        </div>
      </Accordion>
      <div onClick={() => flagHandler()} className={`flag ${currentQuestion == 21 && 'active'}`}>
        {flag ? <BookmarkIcon /> : <BookmarkBorderIcon />}
      </div>
    </div>
  )
}
export default index