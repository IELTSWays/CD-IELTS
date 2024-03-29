import React from "react";
import { useParams } from "react-router-dom";

// mtu
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// mtu

import VideoPlayer from '@/pages/Confirm/VideoPlayer'
import usePostExamConfirm from "@/services/Requests/usePostExamConfirm";

const skillTimes = {
  writing: '1 hour',
  reading: '1 hour',
  listening: '30 minutes',
};

const Confirm = () => {

  const { id } = useParams()

  const {
    refetch: refetchPostExamConfirm,
  } = usePostExamConfirm<any>(localStorage.getItem('test_id'))

  return (
    <>
      <Grid sx={{ py: 3, display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: { sm: '90%', xs: "90%", md: "60%" } }}>
          <Card variant="outlined" sx={{ p: 3 }}>
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
              <VideoPlayer id={id} />
            </Grid>
            <Button
              variant="contained"
              startIcon={<ArrowForwardIcon />}
              sx={{ width: 'fittContent', mt: 3, background: 'black' }}
              onClick={() => refetchPostExamConfirm()}
            >
              Start IELTS Online&nbsp;<span className="capitalize"> {id} </span>
            </Button>
          </Card>
        </Box>
      </Grid>
    </>
  );
};

export default Confirm;