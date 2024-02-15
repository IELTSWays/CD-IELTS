import { useState, useEffect } from "react";
import DateObject from "react-date-object";
import { useNavigate } from "react-router-dom";

// mtu
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import LoadingButton from "@mui/lab/LoadingButton";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Skeleton from '@mui/material/Skeleton';
// mtu

import DatePicker from "react-multi-date-picker";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import "react-multi-date-picker/styles/layouts/mobile.css";

import useGetProfile from "@/services/Requests/useGetProfile"
import usePatchProfile from "@/services/Requests/usePatchProfile"

import List from '@/pages/Profile/List.json'

const Profile = () => {

  const navigate = useNavigate();

  const { isLoading, data, refetch } = useGetProfile();

  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [first_Language, setFirst_Language] = useState('');
  const [first_LanguageIndex, setFirst_LanguageIndex] = useState()
  const [national_code, setNational_code] = useState();
  const [birth_date, setBirth_date] = useState();
  const [city, setCity] = useState();
  const [mobile, setMobile] = useState();

  const {
    data: dataPatchProfile,
    isLoading: isLoadingPatchProfile,
    isSuccess,
    refetch: refetchPatchProfile
  } = usePatchProfile({
    "first_name": first_name,
    "last_name": last_name,
    "first_Language": first_Language,
    "national_code": national_code,
    "birth_date": new Date(birth_date)?.toLocaleDateString().replace(/(\d+)\/(\d+)\/(\d+)/, "$3-$1-$2"),
    "city": city
  });

  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    setFirst_name(data?.first_name)
    setLast_name(data?.last_name)
    setMobile(data?.phone_number)
    setNational_code(data?.national_code)
    setCity(data?.city)
    setBirth_date(new Date(data?.birth_date))
    setFirst_Language(List?.data[List?.data.findIndex(obj => obj.value === data?.first_Language)]?.value)
  }, [data])

  useEffect(() => {
    first_LanguageIndex && setFirst_Language(List?.data[List?.data.findIndex(obj => obj.value === data?.first_Language)]?.value)
  }, [])

  const handleFirst_Language = (event: SelectChangeEvent) => {
    setFirst_Language(event.target.value as string);
  };

  // birthday
  let birthday: any;
  if (birth_date) {
    birthday = new DateObject(birth_date)
      .convert(gregorian, gregorian_en)
      .format("YYYY-MM-DD");
  }

  let sortedData = List.data.sort(function (a, b) {
    return a.value.localeCompare(b.value);
  });

  // useEffect(() => {
  //   isSuccess && navigate('/')
  // }, [])

  return (
    <>
      {isLoading ?
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item key={index} xs={4} sm={4} md={6} >
              <Skeleton variant="rounded" height={56} />
            </Grid>
          ))}
        </Grid>
        :
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="First Name"
              id="firstName"
              name="firstName"
              value={first_name}
              onChange={(e) => setFirst_name(e.target.value)}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Last Name"
              id="lastName"
              name="lastName"
              value={last_name}
              onChange={(e) => setLast_name(e.target.value)}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={6} sx={{ mt: '15px' }}>
            <FormControl fullWidth>
              <InputLabel>First Language</InputLabel>
              <Select
                MenuProps={{
                  style: {
                    maxHeight: 300,
                  },
                }}
                value={first_Language}
                label="First Language"
                onChange={handleFirst_Language}
              >
                {sortedData.map((i) => {
                  return (
                    <MenuItem key={i.id} value={i.value}> {i.label} </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4} sm={4} md={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="number"
              label="National ID"
              id="nationalID"
              name="nationalID"
              value={national_code}
              onChange={(e) => setNational_code(e.target.value)}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="City"
              id="city"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={6} sx={{ my: { xs: 2, sm: 0 } }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <FormLabel id="datePicker-label">Birthday *</FormLabel>
              <DatePicker
                calendar={gregorian}
                locale={gregorian_en}
                value={birth_date}
                id="datePicker-input"
                // disabled={isProfileFilled == "true"}
                className="rmdp-mobile"
                onChange={(birth_date: any) => setBirth_date(birth_date)}
                maxDate={new Date()}
                format="YYYY-MM-DD"
              />
            </div>
          </Grid>

          <Grid item xs={4} sm={4} md={6}>
            <FormLabel sx={{ top: '10px' }}>Mobile *</FormLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              type="number"
              id="mobile"
              name="mobile"
              disabled={mobile?.length}
              value={mobile}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12} container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <LoadingButton
              type="submit"
              variant="contained"
              size="medium"
              disabled={!first_name || !last_name || !first_Language || !national_code || !birth_date || !city}
              loading={isLoadingPatchProfile}
              onClick={() => refetchPatchProfile()}
              sx={{ width: { xs: '100%', sm: 'unset' } }}
            >
              sava
            </LoadingButton>
          </Grid>
        </Grid>
      }
    </>
  );
};

export default Profile;