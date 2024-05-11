import React from 'react';
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

// mtu
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// mtu

import useGetReport from '@/services/Requests/useGetReport'
import useGetAnswer from '@/services/Requests/useGetAnswer'
import usePostExamStart from '@/services/Requests/usePostExamStart';
import useGetStart from '@/services/Requests/useGetStart';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

function formatString(s: any) {
  s = s.replace(/B/g, "Book ");
  s = s.replace(/G/g, " general");
  s = s.replace(/A/g, " academic");
  s = s.replace(/T/g, " Test ");
  s = s.replace(/[\[\]]/g, "  ");
  s = s.replace(/\'/g, "");
  s = s.replace(/R/g, " reading");
  s = s.replace(/L/g, " listening");
  s = s.replace(/S/g, " speaking");
  s = s.replace(/W/g, " writing ");
  s = s.replace(/[]/g, " ");
  return s;
}

const ListExams = ({ data, skill, icon, isLoading }: any) => {

  const [goToTest, setGoToTest] = useState('B15AST1')
  const [skillExam, setSkillExam] = useState('')

  const {
    refetch: refetchPostExamStart
  } = usePostExamStart<any>({
    type: formatString(goToTest).split(" ").filter(Boolean)[2],
    skill: formatString(goToTest).split(" ").filter(Boolean)[3],
    book: parseInt(formatString(goToTest).split(" ").filter(Boolean)[1]),
    test: parseInt(formatString(goToTest).split(" ").filter(Boolean)[5]),
  })

  const {
    data: dataGetReport,
    refetch: refetchGetReport
  } = useGetReport<any>(localStorage.getItem('test_id'))

  const {
    data: dataGetStart,
    refetch: refetchGetStart,
  } = useGetStart<any>(localStorage.getItem('test_id'))

  const navigate = useNavigate();
  const { refetch: refetchGetAnswer } = useGetAnswer()

  useEffect(() => {
    goToTest.includes('R') && setSkillExam('reading')
    goToTest.includes('W') && setSkillExam('writing')
    goToTest.includes('S') && setSkillExam('speaking')
    goToTest.includes('L') && setSkillExam('listening')
  }, [goToTest])

  const continueExam = () => {
    refetchGetStart()
  }

  data?.sort(function (a: any, b: any) {
    var c: any = new Date(a.created_at);
    var d: any = new Date(b.created_at);
    return d - c;
  });

  return (
    <Grid item xs={4} sm={8} md={6}>
      <Card variant="outlined">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#E21D38" }}>
              {icon}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          titleTypographyProps={{ variant: 'h6' }}
          title={skill}
        />
        <CardContent>
          {isLoading ?
            Array.from(Array(3)).map((_, index) => (
              <Box>
                <Paper variant="outlined" sx={{
                  my: 1.5,
                }}>
                  <Grid item key={index} xs={4} sm={8} md={12} >
                    <Skeleton variant="rounded" width="100%" height={96} />
                  </Grid>
                </Paper>
              </Box>
            )) :
            data?.map((i: any, index: number) => {
              return (
                <Box key={index}>
                  <Paper
                    variant="outlined"
                    onMouseOver={() => localStorage.setItem('test_name', i.name)}
                    sx={{
                      my: 1.5,
                      '&:hover': {
                        backgroundColor: "#F4F4F4",
                      },
                    }}>
                    <Stack
                      spacing={{ xs: 1, sm: 1 }}
                      direction="row"
                      useFlexGap
                      flexWrap="wrap"
                      onMouseOver={() => setGoToTest(i.name)}
                    >
                      <Item sx={{ width: { xs: "100%", md: "100%" }, justifyContent: "center", backgroundColor: 'unset', display: 'flex', alignItems: 'center' }} elevation={0}>
                        {formatString(i.name)}
                      </Item>
                      <Item elevation={0} sx={{ backgroundColor: 'unset', display: 'flex' }}>
                        <Chip
                          variant="outlined"
                          label={new Date(Date.parse(i.created_at)).toLocaleString("en-IR", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", hour12: false, minute: "2-digit" })}
                          sx={{ minWidth: '120px' }}
                        />
                      </Item>
                      <Item
                        elevation={0}
                        onMouseOver={() => localStorage.setItem('test_id', i.test_id)}
                        sx={{
                          backgroundColor: 'unset',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end'
                        }}>
                        {(!i.answers && !i.is_expired && !i.test_done) &&
                          <Button
                            variant="contained"
                            size="small"
                            sx={{ width: '120px' }}
                            onClick={() => refetchPostExamStart()}
                          >
                            start
                          </Button>
                        }
                        {(i.answers && !i.is_expired && !i.test_done) &&
                          <Button
                            variant="contained"
                            size="small"
                            sx={{ width: '120px' }}
                            onClick={() => continueExam()}
                          >
                            go to test
                          </Button>
                        }
                        {(!i.test_done && i.is_expired) &&
                          <Button
                            variant="contained"
                            size="small"
                            sx={{ width: '120px' }}
                            disabled
                          >
                            expired
                          </Button>
                        }
                        {(i.test_done) &&
                          <Button
                            variant="contained"
                            size="small"
                            sx={{ width: '120px' }}
                            onClick={() => navigate(`/reports/${localStorage.getItem('test_id')}`)}
                          >
                            report
                          </Button>
                        }
                      </Item>
                    </Stack>
                  </Paper>
                </Box>
              )
            })
          }
        </CardContent>
      </Card>
    </Grid>
  )
};

export default ListExams;