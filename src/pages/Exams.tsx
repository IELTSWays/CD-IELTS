import { useEffect } from 'react'

// mtu
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
// mtu

import ListExams from '@/components/ListExams';

import useGetTests from '@/services/Requests/useGetTests';
import useGetTestsWriting from '@/services/Requests/useGetTestsWriting';
import useGetTestsSpeaking from '@/services/Requests/useGetTestsSpeaking';

const Exams = () => {

  const {
    data: dataGetTests,
    isLoading: isLoadingGetTests,
    refetch: refetchGetTests
  } = useGetTests()

  const {
    data: dataGetTestsWriting,
    isLoading: isLoadingGetTestsWriting,
    refetch: refetchGetTestsWriting
  } = useGetTestsWriting()

  const {
    data: dataGetTestsSpeaking,
    isLoading: isLoadingGetTestsSpeaking,
    refetch: refetchGetTestsSpeaking
  } = useGetTestsSpeaking()

  useEffect(() => {
    refetchGetTests()
    refetchGetTestsWriting()
    refetchGetTestsSpeaking()
  }, [])

  console.log(
    '[dataGetTests]', dataGetTests?.results,
  )

  console.log(
    '[dataGetTestsWriting]', dataGetTestsWriting?.results,
  )

  console.log(
    '[dataGetTestsSpeaking]', dataGetTestsSpeaking?.results
  )

  return (
    <>
      <Grid sx={{ py: 3, px: 2 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <ListExams data={dataGetTests?.results.filter((i: any) => i.skill == 'reading')} skill="Reading" />
        <ListExams data={dataGetTests?.results.filter((i: any) => i.skill == 'listening')} skill="Listening" />
      </Grid>
    </>
  );
};

export default Exams;