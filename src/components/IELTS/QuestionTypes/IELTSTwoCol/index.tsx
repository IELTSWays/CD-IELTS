import React from "react";

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const index = ({ colLeft = "", colRight=""}: any) => {

  return (
    <div className="align-items-start justify-content-space-between">
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
        sx={{ alignItems: 'center', py: 1 }}
      >
        {colLeft.length > 1 &&
          <Paper elevation={0} sx={{ width: '200px' }}>
            <Typography>{colLeft}</Typography>
          </Paper>
        }
        {colRight.length > 1 &&
          <Paper elevation={0}>
            <Typography>{colRight}</Typography>
          </Paper>
        }
      </Stack>
    </div>
  );
};

export default index;