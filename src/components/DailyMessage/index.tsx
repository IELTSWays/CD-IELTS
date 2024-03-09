import { useState, useEffect } from "react";

// mtu
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RocketIcon from '@mui/icons-material/Rocket';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
// mtu

import quotations from './Quotations.json'

const DailyMessage = ({ firstName }: any) => {

  const [quotation, setQuotation] = useState({quote: "",});

  const getRandomQuotation = () => {
    const randomIndex = Math.floor(Math.random() * quotations.data.length);
    const randomQuotation = quotations.data[randomIndex];
    setQuotation(randomQuotation);
  };

  useEffect(() => {
    getRandomQuotation();
    const intervalId = setInterval(getRandomQuotation, 120000);
    return () => clearInterval(intervalId);
  }, []);


  return <Card variant="outlined" id="daily-message">
    <CardHeader
      sx={{ pb: 0 }}
      avatar={
        <Avatar sx={{ bgcolor: green[500] }}>
          <RocketIcon />
        </Avatar>
      }
      titleTypographyProps={{ variant: 'h6' }}
      title="Daily Message"
    />
    <CardContent>
      <Box>
        <Stack direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}>
          {/* <Paper elevation={0}>
            <img src={motivation1} alt="motivation" height="150px" style={{ borderRadius: '5px' }} />
          </Paper> */}
          <Paper elevation={0} className="daily-message-container">
            <Typography>Dear <strong> {firstName ? firstName : 'friend'} </strong> </Typography>
            <Typography variant="h6" sx={{ py: 1 }}>
              {quotation?.quote}
            </Typography>
            <Typography variant="button" sx={{ display: 'flex', fontStyle: 'oblique' }}>
              <FormatQuoteIcon/>
              {quotation?.author}
            </Typography>
          </Paper>
        </Stack>
      </Box>

    </CardContent>
  </Card>;
};

export default DailyMessage;