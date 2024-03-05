import { useState, useEffect } from "react";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import "react-multi-date-picker/styles/layouts/mobile.css";

// mtu
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// mtu

import ListTeachers from "@/components/ListTeachers";
import Times from "@/pages/Speaking/Times";

import useGetTeacherList from "@/services/Requests/useGetTeacherList";
import useGetTeacherTimes from "@/services/Requests/useGetTeacherTimes"
import usePostCreateOrderSpeaking from "@/services/Requests/usePostCreateOrderSpeaking";

const Speaking = () => {

  const [time, setTime] = useState<any>('')
  const [date, setDate] = useState<any>();

  const {
    data: dataGetTeacherList,
    isLoading: isLoadingGetTeacherList,
    refetch: refetchGetTeacherList
  } = useGetTeacherList()

  const {
    data: dataGetTeacherTimes,
    isLoading: isLoadingGetTeacherTimes,
    refetch: refetchGetTeacherTimes
  } = useGetTeacherTimes()

  const {
    refetch: refetchPostCreateOrderSpeaking,
  } = usePostCreateOrderSpeaking({
    "name": "B15AST1",
    "teacher": parseInt(time.split("-")[0]),
    "time": parseInt(time.split("-")[1]),
    "type": "academic"
  })

  useEffect(() => {
    refetchGetTeacherList()
    refetchGetTeacherTimes()
  }, []);

  console.log(time)

  console.log(dataGetTeacherTimes)

  return (
    <>
      <Grid sx={{ py: 3, px: 2 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
        {isLoadingGetTeacherList && Array.from(Array(4)).map((_, index) => (
          <Grid item xs={4} sm={8} md={6} lg={3} key={index}>
            <Card variant="outlined">
              <Skeleton variant="rounded" width='100%' height={150} />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', py: 1 }}>
                <Skeleton variant="text" sx={{ width: '100%', height: '40px' }} />
              </CardContent>
              <CardActions>
                <Box sx={{ width: '100%', mt: 1 }}>
                  <Skeleton variant="text" sx={{ width: '50%', height: '40px', ml: 1 }} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mx: 1, flexDirection: { xs: 'column', md: 'row' } }} id="chip-speaking">
                    <Skeleton variant="rounded" width="100%" height={46} />
                  </Box>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}

        {dataGetTeacherList?.map((i: any) => {
          return (
            <Grid item xs={4} sm={8} md={6} lg={3} key={i.id}>
              <ListTeachers data={i} onClick={(e: any) => console.log(e.currentTarget.value)
              } />
            </Grid>
          )
        })}
      </Grid>

      <Grid sx={{ py: 3, px: 2 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={8} md={12}>
          <Card variant="outlined" sx={{ py: 3, px: 2, backgroundColor: '#f9f9f9' }}>
            <Grid sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Avatar sx={{ bgcolor: red[700] }}>
                <CalendarMonthIcon />
              </Avatar>
              <Typography display="block" sx={{ px: 1, minWidth: '200px' }}> Select Data </Typography>
            </Grid>
            <Grid sx={{ display: "flex", flexDirection: { xs: 'column', md: 'row' } }}>
              <Grid item sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mt: 3, mb: 1.5 }}>
                <DatePicker
                  calendar={persian}
                  locale={persian_fa}
                  value={date}
                  id="datePicker-input"
                  className="rmdp-mobile"
                  placeholder="Select date"
                  onChange={(date) => setDate(date)}
                  minDate={new Date()}
                  format="dddd, YYYY/MM/DD"
                />
                <Typography display="block" align="center" sx={{ mx: 1.5, pt: '12px', visibility: date ? 'visible' : 'hidden' }}>
                  {date ? date.convert(gregorian, gregorian_en).format("DD MMMM YYYY") : 'Select Data '}
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>

      {!date ?
        <Grid sx={{ py: 3, px: 2 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4} sm={8} md={12}>
            <Card variant="outlined" sx={{ py: 3, px: 2 }}>
              <Typography display="block" sx={{ py: 4 }} align="center">
                Please specify the date of your desired session, after selecting the date, you can specify the list of instructors and their selectable times.
              </Typography>
            </Card>
          </Grid>
        </Grid>
        :
        <>
          <Times onClick={(e: any) => setTime(e.currentTarget.value)} selected={time} />
        </>
      }


      <Grid sx={{ py: 3, pr: 2 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={8} md={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" color="success" onClick={() => time && refetchPostCreateOrderSpeaking()} disabled={!time.length} sx={{ width: { xs: "100%", md: "auto" } }}>
            Next
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Speaking;