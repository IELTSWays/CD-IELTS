import React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';

// mtu
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { red, green } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import PieChartIcon from '@mui/icons-material/PieChart';
import RuleIcon from '@mui/icons-material/Rule';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ShortTextIcon from '@mui/icons-material/ShortText';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NotesIcon from '@mui/icons-material/Notes';
// mtu

import TableReport from "@/components/TableReport";
import PieChart from "@/components/Chars/PieChart";

import useGetReport from '@/services/Requests/useGetReport';
import useGetReportFull from '@/services/Requests/useGetReportFull'

const Reports = () => {

  const [fullReport, setFullReport] = useState(false)

  const { id } = useParams()

  const {
    data,
    isLoading,
    refetch
  } = useGetReport(id)

  const { data: dataGetReportFull,
    isLoading: isLoadingGetReportFull,
    refetch: refetchGetReportFull
  } = useGetReportFull(id);

  useEffect(() => {
    refetch()
    refetchGetReportFull()

  }, [])

  console.log('[dataGetReportFull]', dataGetReportFull)
  console.log('[data]', data)

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
                  {/* <TableReport /> */}

                  {/* {dataGetReportFull?.full_data.slice(0, 10)?.map((i: any) => {
                    return (
                      <Box sx={{ flexGrow: 1, width: '100%', py: 1 }} >
                        <Paper variant="outlined" sx={{ p: 1 }}>
                          <Stack spacing={1} direction="row" alignItems="center" sx={{ mb: 1 }}>
                            <Avatar sx={{ bgcolor: i.is_correct ? red[700] : green[700] }}> {i.number} </Avatar>
                            <Typography gutterBottom>{i.question}</Typography>
                          </Stack>
                        </Paper>
                      </Box>
                    )
                  })} */}

                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                      {dataGetReportFull?.full_data.slice(0, 20)?.map((i: any, index: any) => {
                        return (
                          <Grid item xs={4} sm={8} md={6} key={index}>
                            <Box sx={{ flexGrow: 1, width: '100%' }}>
                              <Paper variant="outlined" sx={{ p: 1 }}>
                                <Stack spacing={1} direction="row" alignItems="center">
                                  <Avatar
                                    variant="rounded"
                                    sx={{
                                      width: 24, height: 24, fontSize: '14px',
                                      bgcolor: i.is_correct ? red[700] : green[700]
                                    }}
                                  >
                                    {i.number}
                                  </Avatar>
                                  <Typography variant="caption">
                                    {i.answer}
                                  </Typography>
                                </Stack>
                              </Paper>
                            </Box>
                          </Grid>
                        )
                      })}
                    </Grid>
                  </Box>

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
                    <PieChart percent={[25, 25, 50,]} />
                  </div>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={4} sm={8} md={12} sx={{ mt: 5 }} display={{ xs: "none", sm: "block" }}>
              <Card variant="outlined">
                <CardHeader
                  sx={{ flexWrap: 'wrap' }}
                  avatar={
                    <Avatar sx={{ bgcolor: red[700] }}>
                      <RuleIcon />
                    </Avatar>
                  }
                  titleTypographyProps={{ variant: 'h6' }}
                  title="Full Report"
                />
                <CardContent sx={{ py: 0 }}>
                  {dataGetReportFull?.full_data?.map((i: any) => {
                    return (
                      <Box sx={{ flexGrow: 1, width: '100%', py: 1 }} >
                        <Paper variant="outlined" sx={{ p: 1 }}>
                          <Stack spacing={1} direction="row" alignItems="center" sx={{ mb: 1 }}>
                            <Avatar sx={{ bgcolor: i.is_correct ? red[700] : green[700] }}> {i.number} </Avatar>
                            <Typography gutterBottom>{i.question}</Typography>
                          </Stack>
                          <Stack spacing={1} direction="row" sx={{ mb: 1, p: 1 }}>
                            <ChevronRightIcon
                              sx={{
                                border: '1px solid #EBEBEB',
                                fontSize: '30px',
                                borderRadius: '5px'
                              }} />
                            <Typography sx={{ pt: '4px' }}>
                              {i.answer}
                            </Typography>
                          </Stack>
                          <Stack spacing={1} direction="row" sx={{ mb: 1, p: 1 }}>
                            <ShortTextIcon
                              sx={{
                                border: '1px solid #EBEBEB',
                                fontSize: '30px',
                                borderRadius: '5px'
                              }} />
                            <Typography sx={{ pt: '4px' }}>
                              {i.keywords}
                            </Typography>
                          </Stack>
                          <Stack spacing={1} direction="row" sx={{ mb: 1, p: 1 }}>
                            <NotesIcon
                              sx={{
                                border: '1px solid #EBEBEB',
                                fontSize: '30px',
                                borderRadius: '5px'
                              }} />
                            {i.full_answer ? parse(`${i.full_answer}`) :
                              <Typography sx={{ pt: '4px' }}>There is no explanation</Typography>
                            }
                          </Stack>
                        </Paper>
                      </Box>
                    )
                  })}
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


