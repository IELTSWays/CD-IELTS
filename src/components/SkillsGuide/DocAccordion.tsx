import { useState } from 'react';
// mtu
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// mtu
import { DocListening, DocReading, DocWriting, DocSpeaking } from '@/components/SkillsGuide/Document'

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: red[700] }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const DocAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>('listening');

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion expanded={expanded === 'listening'} onChange={handleChange('listening')}>
        <AccordionSummary aria-controls="listeningd-content" id="listeningd-header">
          <Typography> Listening</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DocListening />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'reading'} onChange={handleChange('reading')}>
        <AccordionSummary aria-controls="readingd-content" id="readingd-header">
          <Typography>Reading</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DocReading />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'writing'} onChange={handleChange('writing')}>
        <AccordionSummary aria-controls="writingd-content" id="writingd-header">
          <Typography>                 
            Writing
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DocWriting />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'speaking'} onChange={handleChange('speaking')}>
        <AccordionSummary aria-controls="speakingd-content" id="speakingd-header">
          <Typography>Speaking</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DocSpeaking />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default DocAccordion;
