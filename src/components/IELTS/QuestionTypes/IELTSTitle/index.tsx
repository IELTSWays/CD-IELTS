import React from "react";
import { Paper, Typography } from "@mui/material";

const IELTSTitle = ({ title }) => {

  return (
    <Paper elevation={0}>
      <Typography>
        <strong>{title}</strong>
      </Typography>
    </Paper>
  );
};

export default IELTSTitle;