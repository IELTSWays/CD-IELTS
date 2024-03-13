// mtu
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';

import Avatar from '@mui/material/Avatar';
import { red, green } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import InfoIcon from '@mui/icons-material/Info';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// mtu

import video1 from '@/assets/videos/example.mp4'

const SingleTeacher = () => {

  return (
    <>
      <Grid
        container
        spacing={{ xs: 1, sm: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={4} md={12} sx={{ mb: 1 }}>
          <Card variant="outlined">
            <CardHeader
              sx={{ flexWrap: 'wrap' }}
              avatar={
                <Avatar sx={{ bgcolor: "#E21D38" }}>
                  <InfoIcon />
                </Avatar>
              }
              titleTypographyProps={{ variant: 'h6' }}
              title="Mahdi Mohammadi"
            />

            <CardContent sx={{ py: 0 }}>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis minus eum commodi vel exercitationem deserunt esse praesentium, fuga, ipsum eaque maiores animi illo dignissimos ducimus assumenda voluptates. Modi dolorum vero voluptatibus at earum, neque est. Accusamus eius magni fugiat non.
              </Typography>
            </CardContent>
            <CardActions sx={{ pl: 2, pb: 2 }}>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={4} sm={4} md={4}>
          <Card variant="outlined">
            <CardHeader
              sx={{ flexWrap: 'wrap' }}
              avatar={
                <Avatar sx={{ bgcolor: "#E21D38" }}>
                  <SmartDisplayIcon />
                </Avatar>
              }
              titleTypographyProps={{ variant: 'h6' }}
              title="Introduction"
            />
            <CardContent sx={{ py: 0 }}>
              <CardMedia
                component="video"
                image={video1}
                controls
                sx={{ borderRadius: 1.5 }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4} sm={4} md={8}>
          <Card variant="outlined">
            <CardHeader
              sx={{ flexWrap: 'wrap' }}
              avatar={
                <Avatar sx={{ bgcolor: "#E21D38" }}>
                  <SummarizeIcon />
                </Avatar>
              }
              titleTypographyProps={{ variant: 'h6' }}
              title="Summary"
            />
            <CardContent sx={{ py: 0 }}>
              <div>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                  <Paper elevation={0} sx={{
                    textAlign: 'left',
                    flexGrow: 1,
                  }}>
                    <Stack direction="row" alignItems="center">
                      <Avatar sx={{ bgcolor: green[500], mr: 1, }} variant="rounded">
                        <AccountBalanceIcon fontSize="small" />
                      </Avatar>
                      <strong> Academic Degree:&nbsp; </strong> phd
                    </Stack>
                  </Paper>

                  <Paper elevation={0} sx={{
                    textAlign: 'left',
                    flexGrow: 1,
                  }}>
                    <Stack direction="row" alignItems="center">
                      <Avatar sx={{ bgcolor: green[500], mr: 1, }} variant="rounded">
                        <VerifiedUserIcon fontSize="small" />
                      </Avatar>
                      <strong> Certificate:&nbsp; </strong> TTC
                    </Stack>
                  </Paper>

                  <Paper elevation={0} sx={{
                    textAlign: 'left',
                    flexGrow: 1,
                  }}>
                    <Stack direction="row" alignItems="center">
                      <Avatar sx={{ bgcolor: green[500], mr: 1, }} variant="rounded">
                        <StarIcon fontSize="small" />
                      </Avatar>
                      <strong> IELTS Score:&nbsp; </strong> 8.5
                    </Stack>
                  </Paper>

                </Stack>
              </div>

              <div>
                <Typography variant="h6" sx={{ mt: 6 }}>
                  Cooperation with the IELTS test centers:
                </Typography>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  sx={{ fontSize: '15px' }}
                >
                  <Paper elevation={0} sx={{
                    textAlign: 'left',
                    flexGrow: 1,
                    px: 1
                  }}>
                    <ul id="list-red-bullet">
                      <li>
                        Lorem ipsum dolor sit amet.
                      </li>
                      <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      </li>
                    </ul>
                  </Paper>

                  <Paper elevation={0} sx={{
                    textAlign: 'left',
                    flexGrow: 1,
                    px: 1

                  }}>
                    <ul id="list-red-bullet">
                      <li>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      </li>
                    </ul>
                  </Paper>
                </Stack>
              </div>

            </CardContent>

          </Card>

        </Grid>
      </Grid>
    </>
  );
};

export default SingleTeacher;