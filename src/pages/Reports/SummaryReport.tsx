import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";

import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import PieChartIcon from '@mui/icons-material/PieChart';
import SummarizeIcon from '@mui/icons-material/Summarize';
import EastIcon from '@mui/icons-material/East';

import PieChart from "@/components/Chars/PieChart";
import useGetReport from '@/services/Requests/useGetReport';
import useGetReportFull from '@/services/Requests/useGetReportFull'

const SummaryReport = () => {

  const { id } = useParams()

  const {
    data,
    isLoading,
    refetch
  } = useGetReport(id)

  const {
    data: dataGetReportFull,
    refetch: refetchGetReportFull
  } = useGetReportFull(id);


  useEffect(() => {
    refetch()
    refetchGetReportFull()
  }, [])

  return (
    <>
      <Grid item xs={4} sm={4} md={8}>
        <Card variant="outlined">
          <CardHeader
            sx={{ flexWrap: 'wrap', mb: 4 }}
            avatar={
              <Avatar sx={{ bgcolor: "#E21D38" }}>
                <SummarizeIcon />
              </Avatar>
            }
            titleTypographyProps={{ variant: 'h6' }}
            title="Summary"
          />
          <CardContent sx={{ py: 0 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {data?.full_data?.map((i: any, index: any) => {
                  return (
                    <Grid item xs={4} sm={8} md={4} key={index} sx={{ pt: '4px' }}>
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
                                      i.is_correct == false ? "#E21D38" : null
                              }}>
                              {i.number}
                            </Avatar>
                            {i.is_correct == false &&
                              <>
                                <Typography
                                  variant="caption"
                                  sx={{ wordBreak: 'break-all', textDecoration: 'line-through' }}
                                  className="capitalize">
                                  {i.user_answer}
                                </Typography>
                                <EastIcon sx={{ color: green[700] }} />
                              </>
                            }
                            <Typography
                              variant="caption"
                              sx={{ wordBreak: 'break-all' }}
                              className="capitalize">
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

      {/* chart */}
      <Grid item xs={4} sm={4} md={4}>
        <Card variant="outlined">
          <CardHeader
            sx={{ flexWrap: 'wrap' }}
            avatar={
              <Avatar sx={{ bgcolor: "#E21D38" }}>
                <PieChartIcon />
              </Avatar>
            }
            titleTypographyProps={{ variant: 'h6' }}
            title="Chart"
          />
          <CardContent sx={{ py: 0 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '330px',
                margin: 'auto'
              }}>
              <PieChart percent={[
                (data?.full_data?.filter((item: { is_correct: boolean; }) => item.is_correct == true).length / data?.full_data?.length * 100).toFixed(2),
                (data?.full_data?.filter((item: { is_correct: boolean; }) => item.is_correct == false).length / data?.full_data?.length * 100).toFixed(2),
                (data?.full_data?.filter((item: { is_correct: string; }) => item.is_correct == 'not-answer').length / data?.full_data?.length * 100).toFixed(2)
              ]} />
            </div>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default SummaryReport;