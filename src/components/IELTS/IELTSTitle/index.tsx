import React from 'react';
import { Paper, Typography } from '@mui/material';

const IELTSTitle = ({ title, isHeader = false }) => {
  return (
    <Paper elevation={0} sx={{ py: isHeader ? 2 : 1 }}>
      <Typography variant={isHeader ? 'h6' : 'body1'}>
        <strong>{title}</strong>
      </Typography>
    </Paper>
  );
};

export default IELTSTitle;