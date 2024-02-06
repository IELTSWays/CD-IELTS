// mtu
import Grid from "@mui/material/Grid";
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

function formatString(s: any) {
  s = s.replace(/B/g, "Book ");
  s = s.replace(/G/g, " General");
  s = s.replace(/A/g, " Academic");
  s = s.replace(/T/g, " Test ");
  s = s.replace(/[\[\]]/g, "  ");
  s = s.replace(/\'/g, "");
  s = s.replace(/R/g, " Reading");
  s = s.replace(/L/g, " Listening");
  s = s.replace(/S/g, " Speaking ");
  s = s.replace(/W/g, " Writing ");
  s = s.replace(/[]/g, " ");
  return s;
}

const ListExams = ({ data, skill }: any) => {

  return (
    <Grid item xs={4} sm={8} md={6}>
      <Card variant="outlined">
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
          title={skill}
        />
        <CardContent>
          {data?.map((i: any) => {
            return (
              <Box>
                <Paper variant="outlined" sx={{
                  my: 1.5, cursor: 'pointer', '&:hover': {
                    backgroundColor: "#F4F4F4",
                  },
                }}>
                  <Stack spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
                    <Item sx={{ width: { xs: "100%", md: "100%" }, justifyContent: "center", backgroundColor: 'unset', display: 'flex', alignItems: 'center' }} elevation={0}>
                      {formatString(i.name)}
                    </Item>
                    <Item elevation={0} sx={{ backgroundColor: 'unset', display: 'flex' }}>
                      <Chip
                        variant="outlined"
                        label={new Date(Date.parse(i.created_at)).toLocaleString("en-IR", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", hour12: false, minute: "2-digit" })}
                        sx={{ minWidth: '120px' }}
                      />
                    </Item>
                    <Item elevation={0} sx={{ backgroundColor: 'unset', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                      {(i.answers && !i.test_done) &&
                        <Button variant="contained" size="small" sx={{ width: '120px', }}>
                          GO TO EXAM
                        </Button>
                      }
                      {(!i.answers && !i.test_done) &&
                        <Button variant="contained" size="small" sx={{ width: '120px', }}>
                          START EXAM
                        </Button>
                      }
                      {(i.test_done) &&
                        <Button variant="contained" size="small" sx={{ width: '120px', }}>
                          FINISH
                        </Button>
                      }
                      {(i.answers && i.test_done) &&
                        <Button variant="contained" size="small" sx={{ width: '120px', }}>
                          RESULT
                        </Button>
                      }
                    </Item>
                  </Stack>
                </Paper>
              </Box>
            )
          })}
        </CardContent>
      </Card>
    </Grid>
  )
};

export default ListExams;