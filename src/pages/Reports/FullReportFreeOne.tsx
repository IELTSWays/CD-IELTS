import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';

import axios from "axios";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import NotesIcon from '@mui/icons-material/Notes';
import GradeIcon from '@mui/icons-material/Grade';
import HeadsetIcon from '@mui/icons-material/Headset';
import VideocamIcon from '@mui/icons-material/Videocam';
import ShortTextIcon from '@mui/icons-material/ShortText';

import { AudioPlayerFull } from "@/components/AudioPlayerFull";

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

const FullReportFreeOne = () => {

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
    data: dataGetReportFullFreeOne,
    refetch: refetchGetReportFullFreeOne
  } = useGetReportFullFreeOne(id)



  useEffect(() => {
    refetchGetReport()
    refetchGetReportFull()
    refetchGetReportFullFreeOne()
  }, [])

  useEffect(() => {
    axios.get(songUrl).then((response) => setSongs(response.data.songs));
  }, []);

  const mergedDataReportFullFreeOne = dataGetReportFullFreeOne?.full_data.map((data: { number: any; }) => ({
    ...data,
    ...(dataGetReportFullFreeOne?.full_media_data.find((mediaData: { number: any; }) => mediaData.number === data.number) || {})
  }));


  console.log('mergedDataReportFullFreeOne', mergedDataReportFullFreeOne);

  return (
    <CardContent sx={{ py: 0 }}>
      {mergedDataReportFullFreeOne?.map((i: any) => {
        return (
          <Box sx={{ flexGrow: 1, width: '100%', py: 1 }}>
            <Paper variant="outlined" sx={{ p: 1 }}>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Stack spacing={1} direction="row" sx={{ mb: 1, p: 1, }}>
                  <GradeIcon
                    sx={{
                      border: '1px solid #388e3c',
                      fontSize: '30px',
                      borderRadius: '5px',
                      background: '#FFF',
                      color: "#388e3c"
                    }} />
                  <Typography variant="h5" sx={{ color: '#388e3c' }}>
                    FREE
                  </Typography>
                </Stack>
              </Stack>

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
                <Typography gutterBottom>
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
                  <Typography sx={{ pt: '4px' }}>
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
                  {i.full_answer ? parse(`${i.full_answer}`) :
                    <Typography sx={{ pt: '4px' }}>There is no explanation</Typography>
                  }
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
  );
};

export default FullReportFreeOne;