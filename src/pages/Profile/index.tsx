import { useState, useEffect } from "react";
import DateObject from "react-date-object";

// mtu
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import LoadingButton from "@mui/lab/LoadingButton";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// mtu

import DatePicker from "react-multi-date-picker";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import "react-multi-date-picker/styles/layouts/mobile.css";

import useGetProfile from "@/services/Requests/useGetProfile"
import usePatchProfile from "@/services/Requests/usePatchProfile"

import List from '@/pages/Profile/List.json'

const Profile = () => {

  const { isLoading, data, refetch } = useGetProfile();

  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [first_Language, setFirst_Language] = useState('');
  const [national_code, setNational_code] = useState(data?.national_code);
  const [birth_date, setBirth_date] = useState(data?.birth_date);
  const [city, setCity] = useState(data?.city);
  const [mobile, setMobile] = useState();

  const {
    isLoading: isLoadingPatchProfile,
    refetch: refetchPatchProfile
  } = usePatchProfile({
    "first_name": first_name,
    "last_name": last_name,
    "first_Language": first_Language,
    "national_code": national_code,
    "birth_date": birth_date?.convert(gregorian, gregorian_en).format("YYYY-MM-DD"),
    "city": city
  });

  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    setFirst_name(data?.candidate_code)
    setLast_name(data?.candidate_code)
    setMobile(data?.phone_number)
    setFirst_Language('')
  }, [data])

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

  // console.log(
  //   birth_date?.convert(gregorian, gregorian_en)
  //     .format("YYYY-MM-DD"))

  let sortedData = List.data.sort(function (a, b) {
    return a.value.localeCompare(b.value);
  });

  return (
    <>
      {isLoading ?
        <div> Loading... </div>
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

          {/* birthday */}
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

          {/* <Grid item xs={4} sm={4} md={6}>
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
          </Grid> */}

          <Grid item xs={12} sm={12} md={12} container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <LoadingButton
              type="submit"
              variant="contained"
              size="medium"
              loading={isLoadingPatchProfile}
              onClick={() => refetchPatchProfile()}
              sx={{ width: { xs: '100%', sm: 'unset' } }}
            >
              continue
            </LoadingButton>
          </Grid>
        </Grid>
      }
    </>
  );
};

export default Profile;