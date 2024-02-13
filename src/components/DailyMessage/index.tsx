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
// mtu
import motivation1 from '@/assets/images/Motivation/01.jpg'

const DailyMessage = ({firstName}) => {

  return <Card variant="outlined" id="daily-message">
    <CardHeader
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
          <Paper elevation={0}>
            <img src={motivation1} alt="motivation" height="150px" style={{ borderRadius: '5px' }} />
          </Paper>
          <Paper elevation={0}>
            <Typography>Dear <strong> {firstName ? firstName : 'friend' } </strong> </Typography>
            <br />
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, amet deleniti. Porro veniam harum sit culpa quaerat, nobis amet labore quia iusto voluptas saepe voluptatum, magnam assumenda cum cupiditate vitae ad perspiciatis. At minima cum fuga corrupti. Architecto, autem eius!
            </Typography>
          </Paper>
        </Stack>
      </Box>

    </CardContent>
  </Card>;
};

export default DailyMessage;