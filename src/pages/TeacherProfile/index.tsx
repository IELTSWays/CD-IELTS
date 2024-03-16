import React from "react";
import { useState, useEffect } from "react";

// mtu
import Grid from "@mui/material/Grid";
// mtu

import useGetTeacherProfile from "@/services/Requests/useGetTeacherProfile"

const Tickets = () => {

  const { data, refetch } = useGetTeacherProfile();

  useEffect(() => {
    refetch()
  }, [])

  return (
    <>
      <Grid sx={{ py: 3 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        TeacherProfile
      </Grid>
    </>
  );
};

export default Tickets;