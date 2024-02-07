import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

// mtu
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
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

  const navigate = useNavigate();
  const { refetch: refetchGetAnswer } = useGetAnswer()

  useEffect(() => {
    goToTest.includes('R') && setSkillExam('reading')
    goToTest.includes('W') && setSkillExam('writing')
    goToTest.includes('S') && setSkillExam('speaking')
    goToTest.includes('L') && setSkillExam('listening')
  }, [goToTest])

  // useEffect(() => {
  //   localStorage.getItem('test_id') && refetchGetAnswer()
  // }, [localStorage.getItem('test_id')])

  const continueExam = () => {
    refetchGetAnswer() && navigate(`/IELTS/${skillExam}`)
  }

  return (
    <Grid item xs={4} sm={8} md={6}>
      <Card variant="outlined">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[700] }}>
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
                    sx={{
                      my: 1.5,
                      cursor: 'pointer',
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
                        {(i.answers && !i.test_done) &&
                          <Button
                            variant="contained"
                            size="small"
                            sx={{ width: '120px' }}
                            onClick={() => continueExam()}
                          >
                            GO TO EXAM
                          </Button>
                        }
                        {(!i.answers && !i.test_done) &&
                          <Button
                            variant="contained"
                            size="small"
                            sx={{ width: '120px' }}
                            onClick={() => refetchPostExamStart()}
                          >
                            START EXAM
                          </Button>
                        }
                        {(i.test_done) &&
                          <Button
                            variant="contained"
                            size="small"
                            sx={{ width: '120px' }}
                            onClick={() => refetchGetReport()}
                          >
                            FINISH
                          </Button>
                        }
                        {(i.answers && i.test_done) &&
                          <Button
                            variant="contained"
                            size="small"
                            sx={{ width: '120px' }}
                            onClick={() => refetchGetReport()}
                          >
                            RESULT
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