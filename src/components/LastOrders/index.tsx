// mtu
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { blue } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// mtu

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

const LastOrders = () => {

  return <Card variant="outlined">
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: blue[700] }}>
          <ShoppingCartIcon />
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      titleTypographyProps={{ variant: 'h6' }}
      title="Last Orders"
    />
    <CardContent>

    <Box>
        <Paper variant="outlined" sx={{
          my: 1.5, cursor: 'pointer', '&:hover': {
            backgroundColor: "#F4F4F4",
          },
        }}>
          <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
            <Item sx={{ width: { xs: "100%", md: "60%" }, justifyContent: { xs: 'center', md: "flex-start" }, backgroundColor: 'unset', display: 'flex', alignItems: 'center' }} elevation={0}>
              Book5 IELTS General
            </Item>
            <Item elevation={0} sx={{ backgroundColor: 'unset', display: 'flex' }}>
              <Chip variant="outlined" color="success" label="Reading" sx={{ width: '80px' }} />
            </Item>
            <Item elevation={0} sx={{ backgroundColor: 'unset', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <Button variant="contained" size="small" sx={{ width: '80px', }}>
                unpaid
              </Button>
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
            <Item sx={{ width: { xs: "100%", md: "60%" }, justifyContent: { xs: 'center', md: "flex-start" }, backgroundColor: 'unset', display: 'flex', alignItems: 'center' }} elevation={0}>
              Book5 IELTS General
            </Item>
            <Item elevation={0} sx={{ backgroundColor: 'unset', display: 'flex' }}>
              <Chip variant="outlined" color="success" label="Reading" sx={{ width: '80px' }} />
            </Item>
            <Item elevation={0} sx={{ backgroundColor: 'unset', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <Button variant="contained" size="small" sx={{ width: '80px', }}>
                unpaid
              </Button>
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
            <Item sx={{ width: { xs: "100%", md: "60%" }, justifyContent: { xs: 'center', md: "flex-start" }, backgroundColor: 'unset', display: 'flex', alignItems: 'center' }} elevation={0}>
              Book5 IELTS General
            </Item>
            <Item elevation={0} sx={{ backgroundColor: 'unset', display: 'flex' }}>
              <Chip variant="outlined" color="success" label="Reading" sx={{ width: '80px' }} />
            </Item>
            <Item elevation={0} sx={{ backgroundColor: 'unset', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <Button variant="contained" size="small" sx={{ width: '80px', }}>
                unpaid
              </Button>
            </Item>
          </Stack>
        </Paper>
      </Box>

    </CardContent>
  </Card>;
};

export default LastOrders;