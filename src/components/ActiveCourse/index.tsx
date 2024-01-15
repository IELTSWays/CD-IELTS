import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

// mtu
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import RocketIcon from '@mui/icons-material/Rocket';
import Turn from '@mui/icons-material/TurnedIn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HistoryIcon from '@mui/icons-material/History';
// mtu

// api
import { useQuery } from "@tanstack/react-query";
import axiosInstance from '@/services/API'
// api

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setTestInfo } from '@/store/slices/user/userSlice'
// store

import usePostExamStart from '@/services/Requests/usePostExamStart';

import Book18 from '@/assets/images/Books/18.jpg'

const items = [
  { title: 'Book5 IELTS General', icon: <AssignmentIcon /> },
  { title: 'Reading', icon: <Turn /> },
  { title: '12-10-2023', icon: <CalendarMonthIcon /> },
  { title: '06-09-1402', icon: <CalendarMonthIcon /> },
  { title: 'You have participated in this exam 3 times before', icon: <HistoryIcon /> },
]

const ActiveCourse = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const { refetch } = usePostExamStart()

  const init = {
    '00001': null,
    '00002': null,
    '00003': null,
    '00004': null,
    '00005': null,
    '00006': null,
    '00007': null,
    '00008': null,
    '00009': null,
    '00010': null,
    '00011': null,
    '00012': null,
    '00013': null,
    '00014': null,
    '00015': null,
    '00016': null,
    '00017': null,
    '00018': null,
    '00019': null,
    '00020': null,
    '00021': null,
    '00022': null,
    '00023': null,
    '00024': null,
    '00025': null,
    '00026': null,
    '00027': null,
    '00028': null,
    '00029': null,
    '00030': null,
    '00031': null,
    '00032': null,
    '00033': null,
    '00034': null,
    '00035': null,
    '00036': null,
    '00037': null,
    '00038': null,
    '00039': null,
    '00040': null,
  }

  const testInfoId = useAppSelector((state) => state.user.testInfo)

  const initPostAnswer = useQuery({
    enabled: false,
    queryKey: ['initPostAnswer'],
    queryFn: async () => {
      const response = await axiosInstance.post(`exam/answer/${testInfoId.test_id}`, {
        "test_done": false,
        "answers": init,
      })
      const data = await response.data
      return data
    },
  })

  const postExamStart = useQuery({
    enabled: false,
    queryKey: ['postExamStart'],
    queryFn: async () => {
      dispatch(setTestInfo({}))
      const response = await axiosInstance.post('exam/start-test', {
        "test": "3",
        "skill": "listening",
        "type": "academic",
        "book": 1
      })
      const data = await response.data
      dispatch(setTestInfo(data))
      navigate("/IELTS/Listening")
      location.reload();
      return data
    },
  })

  console.log(testInfoId.test_id);
  

  const startExamHandler = () => {
    postExamStart.refetch()
  }

  useEffect(() => {
    if (testInfoId.test_id) {
      localStorage.setItem('test_id', testInfoId.test_id);
      initPostAnswer.refetch()
    }
  }, [testInfoId.test_id])

  return <Card variant="outlined">
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: green[500] }}>
          <AssignmentIcon />
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      titleTypographyProps={{ variant: 'h6' }}
      title="Active Tests"
    />
    <CardContent>
      <Grid container spacing={{ xs: 1, sm: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={8} md={3}>
          <img src={Book18} alt="Book18" width="100%" />
        </Grid>
        <Grid item xs={4} sm={8} md={9}>
          <List>
            {items.map((i) => {
              return (
                <ListItem sx={{ padding: 0, marginBottom: '10px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    {i.icon}
                  </ListItemIcon>
                  <Typography variant="body1" sx={{ pl: 1 }}>
                    {i.title}
                  </Typography>
                </ListItem>
              )
            })}
            <Button
              variant="outlined"
              size="small"
              color="success"
              sx={{ mt: 2, width: { xs: '100%', md: "unset" } }}
              startIcon={<RocketIcon />}
              onClick={() => startExamHandler()}
            >
              Let's Go
            </Button>
          </List>
        </Grid>
      </Grid>
    </CardContent>
  </Card>;
};

export default ActiveCourse;