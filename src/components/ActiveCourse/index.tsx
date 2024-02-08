import { useState, useEffect } from 'react'

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

// store
import { useAppSelector } from '@/store/hooks'
// store

import useGetAnswer from '@/services/Requests/useGetAnswer';
import usePostExamStart from '@/services/Requests/usePostExamStart';

const items = [
  { title: 'Book5 IELTS General', icon: <AssignmentIcon /> },
  { title: 'Reading', icon: <Turn /> },
  { title: '12-10-2023', icon: <CalendarMonthIcon /> },
  { title: '06-09-1402', icon: <CalendarMonthIcon /> },
  { title: 'You have participated in this exam 3 times before', icon: <HistoryIcon /> },
]

const listTests: any = [
  {
    book: 1,
    skill: "listening",
    test: "1",
    type: "academic"
  },
  {
    book: 1,
    skill: "reading",
    test: "2",
    type: "academic"
  },
  {
    book: 1,
    skill: "writing",
    test: "3",
    type: "academic"
  }
]

const ActiveCourse = () => {

  const [test, setTest] = useState(null)

  const { refetch } = usePostExamStart(test)
  const { refetch: refetchGetAnswer } = useGetAnswer()

  const testInfoId = useAppSelector((state) => state.user.testInfo)

  useEffect(() => {
    test && refetch()
  }, [test])

  useEffect(() => {
    if (testInfoId.test_id) {
      localStorage.setItem('test_id', testInfoId.test_id);
      refetchGetAnswer()
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
        {/* <Grid item xs={4} sm={8} md={3}>
          <img src={`/Books/18.jpg`} alt="Book18" width="100%" />
        </Grid> */}
        <Grid item xs={4} sm={8} md={9}>
          <List>
            {items.map((i, index) => {
              return (
                <ListItem key={index} sx={{ padding: 0, marginBottom: '10px' }}>
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    {i.icon}
                  </ListItemIcon>
                  <Typography variant="body1" sx={{ pl: 1 }}>
                    {i.title}
                  </Typography>
                </ListItem>
              )
            })}
            {/* <Button
              variant="outlined"
              size="small"
              color="success"
              sx={{ mt: 2, width: { xs: '100%', md: "unset" } }}
              startIcon={<RocketIcon />}
              onClick={() => setTest(listTests[1])}
            >
              Let's Go
            </Button> */}
          </List>
        </Grid>
      </Grid>
    </CardContent>
  </Card>;
};

export default ActiveCourse;