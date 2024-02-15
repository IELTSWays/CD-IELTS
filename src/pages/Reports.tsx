import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

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

import useGetReport from '@/services/Requests/useGetReport';

const Reports = () => {

  const [fullReport, setFullReport] = useState(false)

  const { id } = useParams()

  const {
    data,
    isLoading,
    refetch
  } = useGetReport(id)

  useEffect(() => {
    refetch()
  }, [])

  return (
    <>
      <Grid
        container
        spacing={{ xs: 1, sm: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={8} md={12} sx={{ mb: 5 }}>
          {isLoading && <div> LOADING... </div>}
          {data &&
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
                    {data?.band_score}
                  </Typography>
                }
                titleTypographyProps={{ variant: 'h6' }}
                title="Initial Report"
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
                          <strong>Candidate Name: </strong> <span className="capitalize">{data?.user_first_name}</span>
                        </li>
                        <li>
                          <strong>Exam: </strong> Book {data?.book} Test {(data?.test_name)?.match(/T(\d+)/)[1]}
                        </li>
                        <li>
                          <strong>Type: </strong> <span className="capitalize">{data?.type}</span>
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
                          <strong>Raw Score: </strong> {data?.raw_score}
                        </li>
                        <li>
                          <strong>Band Score: </strong> {data?.band_score}
                        </li>
                        <li>
                          <strong>Skill: </strong> <span className="capitalize">{data?.skill}</span>
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
                          <strong>Exam ID: </strong> {data?.test_id}
                        </li>
                        <li>
                          <strong>Exam Date: </strong> {new Date(data?.test_created_at)?.toLocaleDateString()}
                        </li>
                        <li>
                          <strong>Exam Date: </strong> {new Date(data?.test_created_at)?.toLocaleDateString('fa-IR-u-nu-latn')}
                        </li>
                      </ul>
                    </Paper>

                  </Stack>
                </div>
              </CardContent>
              <CardActions sx={{ pl: 2, pb: 2 }}>
              </CardActions>
            </Card>
          }
        </Grid>

        {!fullReport &&
          <>
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
                  <TableAnswers part={1} />
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
                  <TableAnswers part={2} />
                </CardContent>
              </Card>
            </Grid>
          </>
        }
      </Grid>
    </>
  );
};

export default Reports;