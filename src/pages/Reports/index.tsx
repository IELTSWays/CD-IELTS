import React from 'react'

// mtu
import Grid from "@mui/material/Grid";
// mtu

import InitialReport from './InitialReport';
import SummaryReport from './SummaryReport';
import FullReport from './FullReport';

const index = () => {
  return (
      <Grid
        container
        spacing={{ xs: 1, sm: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <InitialReport />
        <SummaryReport />
        <FullReport />
      </Grid>
  );
};

export default index;