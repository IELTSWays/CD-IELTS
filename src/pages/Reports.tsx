import React from 'react';
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';

import axios from "axios";

import { AudioPlayerFull } from "@/components/AudioPlayerFull";

// mtu
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import { red, green } from '@mui/material/colors';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import RuleIcon from '@mui/icons-material/Rule';
import LockIcon from '@mui/icons-material/Lock';
import NotesIcon from '@mui/icons-material/Notes';
import HeadsetIcon from '@mui/icons-material/Headset';
import PieChartIcon from '@mui/icons-material/PieChart';
import VideocamIcon from '@mui/icons-material/Videocam';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ShortTextIcon from '@mui/icons-material/ShortText';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// mtu

import TableReport from "@/components/TableReport";
import PieChart from "@/components/Chars/PieChart";

import useGetReport from '@/services/Requests/useGetReport';
import useGetReportFull from '@/services/Requests/useGetReportFull'

const songUrl =
  "https://amt-warehouse.s3.amazonaws.com/audio-player-demo/songs.json";


const Reports = () => {

  const [fullReport, setFullReport] = useState(false)
  const [songs, setSongs] = useState([]);

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

  useEffect(() => {
    axios.get(songUrl).then((response) => setSongs(response.data.songs));
  }, []);

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
                  sx={{ flexWrap: 'wrap', mb: 4 }}
                  avatar={
                    <Avatar sx={{ bgcolor: red[700] }}>
                      <SummarizeIcon />
                    </Avatar>
                  }
                  titleTypographyProps={{ variant: 'h6' }}
                  title="Summary"
                />
                <CardContent sx={{ py: 0 }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                      {dataGetReportFull?.full_data?.map((i: any, index: any) => {
                        return (
                          <Grid item xs={4} sm={8} md={4} key={index} className="short-report">
                            <Box sx={{ flexGrow: 1, width: '100%' }}>
                              <Paper variant="outlined" sx={{ p: 1 }}>
                                <Stack spacing={1} direction="row" alignItems="center">
                                  <Avatar
                                    variant="rounded"
                                    sx={{
                                      width: 24, height: 24, fontSize: '14px',
                                      bgcolor:
                                        i.is_correct == true ? green[700] :
                                          i.is_correct == 'not-answer' ? "#adadad" :
                                            i.is_correct == false ? red[700] : null
                                    }}>
                                    {i.number}
                                  </Avatar>
                                  <Typography variant="caption" sx={{ wordBreak: 'break-all' }}>
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
                <CardContent>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="outlined"
                      startIcon={<AssignmentIcon />}
                      size="large"
                    >
                      Text
                    </Button>
                    <Button
                      variant="contained"
                      color="pink"
                      startIcon={<HeadsetIcon />}
                      endIcon={<LockIcon />}
                      size="large"
                    >
                      Audio
                    </Button>
                    <Button
                      variant="contained"
                      color="violet"
                      startIcon={<VideocamIcon />}
                      endIcon={<LockIcon />}
                      size="large"
                    >
                      Video
                    </Button>
                  </Stack>
                </CardContent>
                <CardContent sx={{ py: 0 }}>
                  {dataGetReportFull?.full_data?.map((i: any) => {
                    return (
                      <Box sx={{ flexGrow: 1, width: '100%', py: 1 }} >
                        <Paper variant="outlined" sx={{ p: 1 }}>
                          <Stack spacing={1} direction="row" alignItems="center" sx={{ mb: 1 }}>
                            <Avatar
                              sx={{
                                bgcolor:
                                  i.is_correct == true ? green[700] :
                                    i.is_correct == 'not-answer' ? "#adadad" :
                                      i.is_correct == false ? red[700] : null
                              }}>
                              {i.number}
                            </Avatar>
                            <Typography gutterBottom>
                              {i.question}
                            </Typography>
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
                          <Stack spacing={1} direction="row" sx={{ mb: 1, p: 1 }}>
                            <HeadsetIcon
                              sx={{
                                border: '1px solid #EBEBEB',
                                fontSize: '30px',
                                borderRadius: '5px'
                              }} />
                            {songs.length > 0 ? <AudioPlayerFull songs={songs} /> : <></>}
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