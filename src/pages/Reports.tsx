// mtu
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import PieChartIcon from '@mui/icons-material/PieChart';
import RuleIcon from '@mui/icons-material/Rule';
import SummarizeIcon from '@mui/icons-material/Summarize';
// mtu
import TableReport from "@/components/TableReport";
import TableAnswers from "@/components/TableAnswers";
import PieChart from "@/components/Chars/PieChart";

const Reports = () => {

  return (
    <>
      <Grid
        container
        spacing={{ xs: 1, sm: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={4} md={12} sx={{ mb: 5 }}>
          <Card variant="outlined">
            <CardHeader
              sx={{ flexWrap: 'wrap' }}
              avatar={
                <Avatar sx={{ bgcolor: red[700] }}>
                  <InfoIcon />
                </Avatar>
              }
              action={
                <Typography variant="h3" sx={{ px: 1.5 }}>
                  7.3
                </Typography>
              }
              titleTypographyProps={{ variant: 'h6' }}
              title="Test information"
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
                    px: 1
                  }}>
                    <ul id="list-red-bullet">
                      <li>
                        <strong>Candidate Name: </strong> Meisam Sadeghi
                      </li>
                      <li>
                        <strong>Candidate ID: </strong> 54A65Z
                      </li>
                      <li>
                        <strong>Exam: </strong> CD Mock Academic without comments
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
                        <strong>Score: </strong> 7.3

                      </li>
                      <li>
                        <strong>Skill: </strong> Listening
                      </li>
                      <li>
                        <strong>Exam ID: </strong> 12654
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
                        <strong>Exam Date: </strong> 2023-10-16
                      </li>
                      <li>
                        <strong>Exam Date: </strong> 1402-08-10
                      </li>
                      <li>
                        <strong>Number of times that you have take the test: </strong> 0
                      </li>
                    </ul>
                  </Paper>

                </Stack>
              </div>


            </CardContent>
            <CardActions sx={{ pl: 2, pb: 2 }}>
            </CardActions>
          </Card>

        </Grid>

        <Grid item xs={4} sm={4} md={8}>
          <Card variant="outlined">
            <CardHeader
              sx={{ flexWrap: 'wrap' }}
              avatar={
                <Avatar sx={{ bgcolor: red[700] }}>
                  <SummarizeIcon />
                </Avatar>
              }
              titleTypographyProps={{ variant: 'h6' }}
              title="Summary"
            />
            <CardContent sx={{ py: 0 }}>
              <TableReport />
            </CardContent>
          </Card>

        </Grid>

        <Grid item xs={4} sm={4} md={4}>
          <Card variant="outlined">
            <CardHeader
              sx={{ flexWrap: 'wrap' }}
              avatar={
                <Avatar sx={{ bgcolor: red[700] }}>
                  <PieChartIcon />
                </Avatar>
              }
              titleTypographyProps={{ variant: 'h6' }}
              title="Chart"
            />
            <CardContent sx={{ py: 0 }}>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '330px', margin: 'auto' }}>
                <PieChart />
              </div>
            </CardContent>
          </Card>
        </Grid>


        <Grid item xs={4} sm={8} md={6} sx={{ mt: 5 }} display={{ xs: "block", sm: "none" }} >
          <Card variant="outlined">
            <CardHeader
              sx={{ flexWrap: 'wrap' }}
              avatar={
                <Avatar sx={{ bgcolor: red[700] }}>
                  <RuleIcon />
                </Avatar>
              }
              titleTypographyProps={{ variant: 'h6' }}
              title="Answer Sheet [01-20]"
            />
            <CardContent sx={{ py: 0 }}>
              <TableAnswers part={0} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4} sm={8} md={6} sx={{ mt: 5 }} display={{ xs: "none", sm: "block" }}>
          <Card variant="outlined">
            <CardHeader
              sx={{ flexWrap: 'wrap' }}
              avatar={
                <Avatar sx={{ bgcolor: red[700] }}>
                  <RuleIcon />
                </Avatar>
              }
              titleTypographyProps={{ variant: 'h6' }}
              title="Answer Sheet [01-10]"
            />
            <CardContent sx={{ py: 0 }}>
              <TableAnswers part={1}/>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4} sm={8} md={6} sx={{ mt: 5 }} display={{ xs: "none", sm: "block" }}>
          <Card variant="outlined">
            <CardHeader
              sx={{ flexWrap: 'wrap' }}
              avatar={
                <Avatar sx={{ bgcolor: red[700] }}>
                  <RuleIcon />
                </Avatar>
              }
              titleTypographyProps={{ variant: 'h6' }}
              title="Answer Sheet [11-20]"
            />
            <CardContent sx={{ py: 0 }}>
              <TableAnswers part={2}/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Reports;