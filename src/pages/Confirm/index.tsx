import React from "react";
import { useParams } from "react-router-dom";

// mtu
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// mtu

import usePostExamConfirm from "@/services/Requests/usePostExamConfirm";

const video1 = "https://smnaji.ir/video/example.mp4"

const Confirm = () => {

  const { id } = useParams()


  const {
    refetch: refetchPostExamConfirm,
  } = usePostExamConfirm<any>(localStorage.getItem('test_id'))

  return (
    <>
      <Grid sx={{ py: 3, display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ width: { sm: '90%', xs: "90%", md: "60%" } }}>
          <Grid container>
            <Typography variant="h5" gutterBottom sx={{ color: "#E21D38", pb: 3 }} > IELTS Online Test tutorial </Typography>
          </Grid>
          <Grid sx={{ pb: 3 }} >
            <Divider textAlign="left">
              <Typography variant="h5"> Today </Typography>
            </Divider>
          </Grid>
          <Card variant="outlined" sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', pb: 3 }}>
              IELTS Online <span className="capitalize"> {id} </span>
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "#E21D38", pb: 3 }}>
              Not Completed
            </Typography>
            <Typography variant="subtitle1" sx={{ pb: 3 }}>
              Timing: 30 minutes
            </Typography>
            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
              <video height="300" controls style={{ borderRadius: '10px' }}>
                <source src={video1} type="video/mp4" />
              </video>
            </Grid>
            <Button
              variant="contained"
              startIcon={<ArrowForwardIcon />}
              sx={{ width: 'fittContent', mt: 3, background: 'black'}}
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