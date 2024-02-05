import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import "react-multi-date-picker/styles/layouts/mobile.css";
// mtu
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// mtu
import ListTeachers from "@/components/ListTeachers";
import ListTeachersSkeleton from "@/components/ListTeachers/ListTeachersSkeleton";

import useGetAllTeachers from "@/services/Requests/useGetAllTeachers";
import Times from "@/pages/Speaking/Times";

const listTimes = [
  { value: 1, label: '00:00 - 01:00' },
  { value: 2, label: '01:00 - 02:00' },
  { value: 3, label: '10:00 - 11:00' },
  { value: 4, label: '12:00 - 13:00' },
  { value: 5, label: '13:00 - 14:00' },
  { value: 6, label: '14:00 - 15:00' },
  { value: 7, label: '15:00 - 16:00' },
  { value: 8, label: '16:00 - 17:00' },
  { value: 9, label: '21:00 - 22:00' },
  { value: 10, label: '23:00 - 00:00' }
]

const listTimes1 = [
  { value: 11, label: '00:00 - 01:00' },
  { value: 12, label: '01:00 - 02:00' },
  { value: 13, label: '10:00 - 11:00' },
  { value: 14, label: '12:00 - 13:00' },
  { value: 15, label: '13:00 - 14:00' },
  { value: 16, label: '14:00 - 15:00' },
  { value: 17, label: '15:00 - 16:00' },
  { value: 18, label: '16:00 - 17:00' },
  { value: 19, label: '21:00 - 22:00' },
  { value: 20, label: '23:00 - 00:00' }
]

const Speaking = () => {

  const [time, setTime] = useState<any>('')
  const [date, setDate] = useState<any>();

  const [value, setValue] = useState(0);

  const [sina, setSina] = useState()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  console.log(sina)


  const data = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    }
  ]

  return (
    <>
      <Grid sx={{ py: 3, px: 2 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
        {/* {isLoading && Array.from(Array(6)).map((_, index) => (
          <Grid item xs={4} sm={8} md={6} lg={4} key={index}>
            <ListTeachersSkeleton />
          </Grid>
        ))} */}

        {data?.map((i: any) => {
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
          <Grid sx={{ py: 3, px: 2 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={8} md={12}>
              <Card variant="outlined" sx={{ py: 3, px: 2 }}>
                <Grid sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Avatar alt="Mahdi Mohammadi" src="/static/images/avatar/1.jpg" />
                  <Typography display="block" sx={{ px: 1, minWidth: '200px' }}> Mr.Mahdi Mohammadi </Typography>
                </Grid>
                <Times onClick={(e: any) => setSina(e.currentTarget.value)
                } sina={sina} />
              </Card>
            </Grid>
          </Grid>

          <Grid sx={{ py: 3, px: 2 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={8} md={12}>
              <Card variant="outlined" sx={{ py: 3, px: 2 }}>
                <Grid sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Avatar alt="Sina Karimi" src="/static/images/avatar/1.jpg" />
                  <Typography display="block" sx={{ px: 1, minWidth: '200px' }}> Mr.Sina Karimi </Typography>
                </Grid>
                <Times />
              </Card>
            </Grid>
          </Grid>
        </>
      }

      <Grid sx={{ py: 3, pr: 2 }} container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={8} md={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" color="success" disabled={!time.length} sx={{ width: { xs: "100%", md: "auto" } }}>
            Next
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Speaking;