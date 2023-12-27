// mtu
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { yellow } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
// mtu

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

const LastTickets = () => {

  return <Card variant="outlined">
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: yellow[700] }}>
          <ConfirmationNumberIcon />
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      titleTypographyProps={{ variant: 'h6' }}
      title="Last Tickets"
    />
    <CardContent>
      <Box>
        <Paper variant="outlined" sx={{
          my: 1.5, cursor: 'pointer', '&:hover': {
            backgroundColor: "#F4F4F4",
          },
        }}>
          <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
            <Item sx={{ width: { xs: "100%", md: "60%" }, backgroundColor: 'unset', display: 'flex', alignItems: 'center', overflowy: 'hidern' }} elevation={0}>
              Lorem ipsum dolor sit, amet consectetur adipisicing
            </Item>
            <Item elevation={0} sx={{ backgroundColor: 'unset', width: '80px', display: 'flex', alignItems: 'center' }}>
              <AccessTimeIcon fontSize="small" sx={{ mr: 0.5 }} />
              <Typography variant="body2" > 20 min ago </Typography>
            </Item>
            <Item elevation={0} sx={{ backgroundColor: 'unset', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <Chip sx={{ width: '80px', borderRadius: '8px' }} label="Answerd" color="success" />
            </Item>
          </Stack>
        </Paper>
      </Box>

      <Box>
        <Paper variant="outlined" sx={{
          my: 1.5, cursor: 'pointer', '&:hover': {
            backgroundColor: "#F4F4F4",
          },
        }}>
          <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
            <Item sx={{ width: { xs: "100%", md: "60%" }, backgroundColor: 'unset', display: 'flex', alignItems: 'center', overflowy: 'hidern' }} elevation={0}>
              Lorem ipsum dolor sit, amet consectetur adipisicing
            </Item>
            <Item elevation={0} sx={{ backgroundColor: 'unset', width: '80px', display: 'flex', alignItems: 'center' }}>
              <AccessTimeIcon fontSize="small" sx={{ mr: 0.5 }} />
              <Typography variant="body2" > 20 min ago </Typography>
            </Item>
            <Item elevation={0} sx={{ backgroundColor: 'unset', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <Chip sx={{ width: '80px', borderRadius: '8px' }} label="Answerd" color="success" />
            </Item>
          </Stack>
        </Paper>
      </Box>

      <Box>
        <Paper variant="outlined" sx={{
          my: 1.5, cursor: 'pointer', '&:hover': {
            backgroundColor: "#F4F4F4",
          },
        }}>
          <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
            <Item sx={{ width: { xs: "100%", md: "60%" }, backgroundColor: 'unset', display: 'flex', alignItems: 'center', overflowy: 'hidern' }} elevation={0}>
              Lorem ipsum dolor sit, amet consectetur adipisicing
            </Item>
            <Item elevation={0} sx={{ backgroundColor: 'unset', width: '80px', display: 'flex', alignItems: 'center' }}>
              <AccessTimeIcon fontSize="small" sx={{ mr: 0.5 }} />
              <Typography variant="body2" > 20 min ago </Typography>
            </Item>
            <Item elevation={0} sx={{ backgroundColor: 'unset', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <Chip sx={{ width: '80px', borderRadius: '8px' }} label="Answerd" color="success" />
            </Item>
          </Stack>
        </Paper>
      </Box>
    </CardContent>
  </Card>;
};

export default LastTickets;