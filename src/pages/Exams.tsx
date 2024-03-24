import React from 'react';
import { useEffect } from 'react'

// mtu
import Grid from "@mui/material/Grid";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HeadphonesIcon from '@mui/icons-material/Headphones';
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
    localStorage.removeItem('confirm')
  }, [])

  return (
    <>
      <Grid sx={{ py: 3, px: 2 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <ListExams 
          data={dataGetTests?.results.filter((i: any) => i.skill == 'reading')} 
          skill="Reading" 
          icon={<LibraryBooksIcon/>}
          isLoading={isLoadingGetTests}
        />
        <ListExams 
          data={dataGetTests?.results.filter((i: any) => i.skill == 'listening')} 
          skill="Listening" 
          icon={<HeadphonesIcon/>}
          isLoading={isLoadingGetTests}
        />
        <ListExams 
          data={dataGetTestsWriting?.results} 
          skill="Writing" 
          icon={<BorderColorIcon/>}
          isLoading={isLoadingGetTestsWriting}
        />
        
        <ListExams 
          data={dataGetTestsSpeaking?.results} 
          skill="Speaking" 
          icon={<KeyboardVoiceIcon/>}
          isLoading={isLoadingGetTestsSpeaking}
        />
      </Grid>
    </>
  );
};

export default Exams;