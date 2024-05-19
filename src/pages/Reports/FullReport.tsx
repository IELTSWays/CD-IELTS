import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';

import axios from "axios";

import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import RuleIcon from '@mui/icons-material/Rule';
import LockIcon from '@mui/icons-material/Lock';
import NotesIcon from '@mui/icons-material/Notes';
import GradeIcon from '@mui/icons-material/Grade';
import HeadsetIcon from '@mui/icons-material/Headset';
import VideocamIcon from '@mui/icons-material/Videocam';
import ShortTextIcon from '@mui/icons-material/ShortText';
import AssignmentIcon from '@mui/icons-material/Assignment';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

import { AudioPlayerFull } from "@/components/AudioPlayerFull";

import FullReportFreeOne from './FullReportFreeOne';

import useGetReport from '@/services/Requests/useGetReport';
import useGetReportFull from '@/services/Requests/useGetReportFull';
import useGetReportMedia from '@/services/Requests/useGetReportMedia';
import useGetReportAudio from '@/services/Requests/useGetReportAudio';
import useGetReportVideo from '@/services/Requests/useGetReportVideo';
import useGetReportFullVerify from '@/services/Requests/useGetReportFullVerify';
import useGetReportFullPayment from '@/services/Requests/useGetReportFullPayment';
import useGetReportFullFreeOne from '@/services/Requests/useGetReportFullFreeOne';
import useGetReportMediaVerify from '@/services/Requests/useGetReportMediaVerify';
import useGetReportMediaPayment from '@/services/Requests/useGetReportMediaPayment';

const songUrl =
  "https://amt-warehouse.s3.amazonaws.com/audio-player-demo/songs.json";

const video1 = "https://smnaji.ir/video/example.mp4"

const index = () => {

  const [songs, setSongs] = useState([]);

  const { id } = useParams()

  const {
    data: dataGetReport,
    isLoading,
    refetch: refetchGetReport
  } = useGetReport(id)

  const {
    data: dataGetReportFull,
    refetch: refetchGetReportFull
  } = useGetReportFull(id);

  const {
    data: dataGetReportFullVerify,
    refetch: refetchGetReportFullVerify
  } = useGetReportFullVerify(id);

  const {
    data: dataGetReportFullPayment,
    refetch: refetchGetReportFullPayment
  } = useGetReportFullPayment(id);

  const {
    data: dataGetReportMedia,
    refetch: refetchGetReportMedia
  } = useGetReportMedia(id);

  const {
    data: dataGetReportMediaVerify,
    refetch: refetchGetReportMediaVerify
  } = useGetReportMediaVerify(id);

  const {
    data: dataGetReportMediaPayment,
    refetch: refetchGetReportMediaPayment
  } = useGetReportMediaPayment(id)

  const {
    data: dataGetReportFullFreeOne,
    refetch: refetchGetReportFullFreeOne
  } = useGetReportFullFreeOne(id)

  const {
    data: dataGetReportAudio,
    refetch: refetchGetReportAudio
  } = useGetReportAudio(id)

  const {
    data: dataGetReportVideo,
    refetch: refetchGetReportVideo
  } = useGetReportVideo(id)


  useEffect(() => {
    refetchGetReport()
    refetchGetReportFull()
    // refetchGetReportAudio()
    // refetchGetReportVideo()
    refetchGetReportFullVerify()
    // refetchGetReportFullFreeOne()
  }, [])

  useEffect(() => {
    axios.get(songUrl).then((response) => setSongs(response.data.songs));
  }, []);

  const mergedDataReportFullFreeOne = dataGetReportFullFreeOne?.full_data.map((data: { number: any; }) => ({
    ...data,
    ...(dataGetReportFullFreeOne?.full_media_data.find((mediaData: { number: any; }) => mediaData.number === data.number) || {})
  }));

  const mergedFullData = dataGetReport?.full_data?.map((item: { number: any; }) => {
    const textItem = dataGetReportFull?.full_data?.find((textItem: { number: any; }) => textItem.number === item.number);
    const audioItem = dataGetReportAudio?.full_data?.find((audioItem: { number: any; }) => audioItem.number === item.number);
    const videoItem = dataGetReportVideo?.full_data?.find((videoItem: { number: any; }) => videoItem.number === item.number);

    return {
      ...item,
      full_answer: textItem ? textItem?.full_answer : null,
      keywords: textItem ? textItem?.keywords : null,
      audio: audioItem ? audioItem?.audio : null,
      video: videoItem ? videoItem?.video : null
    };
  });

  const mergedReport = {
    short_data: dataGetReport?.short_data,
    full_data: mergedFullData
  };

  return (
    <Grid item xs={4} sm={8} md={12} sx={{ mt: 5 }}>
      <Card variant="outlined">
        <CardHeader
          sx={{ flexWrap: 'wrap' }}
          avatar={
            <Avatar sx={{ bgcolor: "#E21D38" }}>
              <RuleIcon />
            </Avatar>
          }
          titleTypographyProps={{ variant: 'h6' }}
          title="Full Report"
        />
        <CardContent>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              startIcon={<AssignmentIcon />}
              endIcon={<LockIcon />}
              size="large"
              onClick={() => refetchGetReportFullPayment()}
            >
              Text
            </Button>
            <Button
              variant="contained"
              color="pink"
              startIcon={<HeadsetIcon />}
              endIcon={<LockIcon />}
              size="large"
              disabled
            >
              Audio
            </Button>
            <Button
              variant="contained"
              color="violet"
              startIcon={<OndemandVideoIcon />}
              endIcon={<LockIcon />}
              size="large"
              onClick={() => refetchGetReportMediaPayment()}
            >
              Video
            </Button>
          </Stack>
        </CardContent>

        {/* <FullReportFreeOne /> */}

        <CardContent sx={{ py: 0 }}>
          {mergedReport?.full_data?.map((i: any) => {
            return (
              <Box sx={{ flexGrow: 1, width: '100%', py: 1 }}>
                <Paper variant="outlined" sx={{ p: 1 }}>
                  {/* QUESTION */}
                  <Stack spacing={1} direction="row" alignItems="center" sx={{ mb: 1 }}>
                    <Avatar
                      sx={{
                        bgcolor:
                          i.is_correct == true ? green[700] :
                            i.is_correct == 'not-answer' ? "#adadad" :
                              i.is_correct == false ? "#E21D38" : null
                      }}>
                      {i.number}
                    </Avatar>
                    <Typography gutterBottom variant="h4">
                      {i.question}
                    </Typography>
                  </Stack>

                  {/* KEYWORDS */}
                  {i.keywords &&
                    <Stack spacing={1} direction="row" sx={{ mb: 1, p: 1 }}>
                      <ShortTextIcon
                        sx={{
                          border: '1px solid #EBEBEB',
                          fontSize: '30px',
                          borderRadius: '5px'
                        }} />
                      <Typography sx={{ pt: '4px' }} variant="h5">
                        {i.keywords}
                      </Typography>
                    </Stack>
                  }

                  {/* FULL ANSWER */}
                  {i.full_answer &&
                    <Stack spacing={1} direction="row" sx={{ mb: 1, p: 1 }}>
                      <NotesIcon
                        sx={{
                          border: '1px solid #EBEBEB',
                          fontSize: '30px',
                          borderRadius: '5px'
                        }} />
                      <div style={{ overflowX: 'auto' }}>
                        {i.full_answer ? parse(`${i.full_answer}`) :
                          <Typography sx={{ pt: '4px' }}>There is no explanation</Typography>
                        }
                      </div>
                    </Stack>
                  }

                  {/* AUDIO */}
                  {i.audio &&
                    <Stack spacing={1} direction="row" sx={{ mb: 1, p: 1 }}>
                      <HeadsetIcon
                        sx={{
                          border: '1px solid #EBEBEB',
                          fontSize: '30px',
                          borderRadius: '5px'
                        }} />
                      {songs.length > 0 ? <AudioPlayerFull songs={songs} /> : <></>}
                    </Stack>
                  }

                  {/* VIDEO */}
                  {i.video &&
                    <Stack spacing={1} direction="row" sx={{ mb: 1, p: 1 }}>
                      <VideocamIcon
                        sx={{
                          border: '1px solid #EBEBEB',
                          fontSize: '30px',
                          borderRadius: '5px'
                        }} />
                      <video height="300" controls style={{ borderRadius: '10px' }}>
                        <source src={`https://api.ieltsways.com${i.video}`} type="video/mp4" />
                      </video>
                    </Stack>
                  }

                </Paper>
              </Box>
            )
          })}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default index;