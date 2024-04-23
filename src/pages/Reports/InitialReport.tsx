import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";

// mtu
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import InfoIcon from '@mui/icons-material/Info';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// mtu

import useGetReport from '@/services/Requests/useGetReport';
import useGetReportFull from '@/services/Requests/useGetReportFull'

const InitialReport = () => {

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
    <Grid item xs={4} sm={8} md={12} sx={{ mb: 5 }}>
      {isLoading && <div> LOADING... </div>}
      {data &&
        <Card variant="outlined">
          <CardHeader
            sx={{ flexWrap: 'wrap' }}
            avatar={
              <Avatar sx={{ bgcolor: "#E21D38" }}>
                <InfoIcon />
              </Avatar>
            }
            action={
              <Typography variant="h3" sx={{ px: 1.5 }}>
                {data?.short_data?.band_score}
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
                      <strong>Candidate Name: </strong> <span className="capitalize">{data?.short_data.user_first_name}</span>
                    </li>
                    <li>
                      <strong>Exam: </strong> Book {data?.short_data.book} Test {(data?.short_data.test_name)?.match(/T(\d+)/)[1]}
                    </li>
                    <li>
                      <strong>Type: </strong> <span className="capitalize">{data?.short_data.type}</span>
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
                      <strong>Raw Score: </strong> {data?.short_data.raw_score}
                    </li>
                    <li>
                      <strong>Band Score: </strong> {data?.short_data.band_score}
                    </li>
                    <li>
                      <strong>Skill: </strong> <span className="capitalize">{data?.short_data.skill}</span>
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
                      <strong>Exam ID: </strong> {data?.short_data.test_id}
                    </li>
                    <li>
                      <strong>Exam Date: </strong> {new Date(data?.short_data.test_created_at)?.toLocaleDateString()}
                    </li>
                    <li>
                      <strong>Exam Date: </strong> {new Date(data?.short_data.test_created_at)?.toLocaleDateString('fa-IR-u-nu-latn')}
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
  );
};

export default InitialReport;