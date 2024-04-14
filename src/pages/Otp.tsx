import React, { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

// api
import axiosInstance from '@/services/API'
// api

// mtu
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google';
import TextsmsIcon from '@mui/icons-material/Textsms';
// mtu

import LayoutAuth from "../layouts/LayoutAuth";
import iconOtp from "../assets/images/otp.png";
import iconMobile from "../assets/images/mobile.png";

const Otp = () => {

  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  // step 0 > Enter Mobile and Request OTP
  // step 1 > Send OTP and Enter code
  // step 3 > Change Mobile
  // step 4 > Resend OTP

  const otpLength = 4;
  const mobileLength = 11;
  const watingTime = 60;

  const [otp, setOtp] = useState<any>("");
  const [mobile, setMobile] = useState<any>("");
  const [otpId, setOtpId] = useState('')
  const [loading, setLoading] = useState<any>(false);
  const [error, setError] = useState<any>("");
  const [counter, setCounter] = useState<any>(watingTime);
  const [showOTP, setShowOTP] = useState<any>("");

  const clientId = "366111965494-bbgflimp8s9dtndoufsah3v235bt8lhh.apps.googleusercontent.com";

  const handleLoginSuccess = (response) => {
    console.log('Login successful:', response);
  };

  const handleLoginFailure = () => {
    console.error('Login failed');
  };


  const path = window.location.origin
  const callBackPart = `?returnTo=${path}/CallbackPage&client_id=  366111965494-bbgflimp8s9dtndoufsah3v235bt8lhh.apps.googleusercontent.com
  }`


  // VITE_APP_API_URL=https://educationapi.firouzehasia.ir/api/
  // VITE_APP_SSO_URL=https://apissotest.firouzehasia.ir/login/login/
  // VITE_APP_SSO_API_URL=https://apissotest.firouzehasia.ir/api/v1/
  // VITE_APP_CLIENT_ID=Education
  // VITE_APP_IS_ADMIN=true


  // STEP-0
  const getSMS = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const response = await axiosInstance.post('accounts/otp', {
        'phone_number': mobile.toString()
      });
      setError(false)
      setLoading(false);
      setOtpId(response.data.data.otp_id)
      setStep(1)
    } catch (error: any) {
      setLoading(false);
      setError(error?.response?.data?.errors[0])
    }
  }

  let url = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=366111965494-bbgflimp8s9dtndoufsah3v235bt8lhh.apps.googleusercontent.com&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email&access_type=offline&redirect_uri=https://api.ieltsways.com/google-redirect/'
  let height = 550;
  let width = 400;
  let left = (screen.width - width) / 2;
  let top = (screen.height - height) / 2;

  const openOAuthLoginPage = () => {
    setLoading(true),
      !loading &&
      window.open(url, "center window", 'resizable = yes, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left)
    setLoading(true)
  }

  // STEP-1
  const getAnswerOtp = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const response = await axiosInstance.post('accounts/otp/verify', {
        "otp_id": otpId,
        "otp_code": otp
      });
      setError(false)
      setLoading(false);
      setCounter(watingTime);
      localStorage.setItem('token', response.data.data.access_token)
      localStorage.setItem('is_profile_fill', response.data.data.is_profile_fill)
      navigate("/")
    } catch (error: any) {
      setLoading(false);
      setError(error?.response?.data?.errors[0])
    }
  }

  const getSSO = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const response = await axiosInstance.post('google-signup');
      setError(false)
      setLoading(false);
      console.log(response.data)
    } catch (error: any) {
      setLoading(false);
      setError(error?.response?.data?.errors[0])
    }
  }

  // STEP-3
  const mobile_change = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setMobile('')
    setLoading(false)
    setError(false)
    setStep(3);
  };

  useEffect(() => {
    const timer: any =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  });

  const getTeleram = (e: any) => { console.log(e) }
  const getWhatsapp = (e: any) => { console.log(e) }

  return (
    <LayoutAuth>
      {(step === 0 || step === 3) && (
        <>
          <div style={{ visibility: error ? "visible" : "hidden" }}>
            <Alert severity="error"> {error} </Alert>
          </div>
          <CardContent sx={{ textAlign: "center" }}>
            <img src={iconMobile} width={75} />
            <Typography gutterBottom variant="h6" component="div">
              {step === 0 && "Mobile"}
              {step === 3 && "Change Number"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {step === 0 && "The code will be sent via SMS"}
              {step === 3 && "Enter your number"}
            </Typography>
          </CardContent>

          {/* mobile */}
          <Grid item md={12} sx={{ display: "flex", justifyContent: "center" }}>
            <TextField
              margin="normal"
              required
              id="mobile"
              label="Mobile"
              name="mobile"
              autoFocus
              error={mobile.length !== mobileLength}
              type="number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              helperText="For Example 09123456789"
            />
          </Grid>

          <Grid sx={{ textAlign: "center", py: 2 }}>
            <Stack direction="row" justifyContent="center" spacing={1} sx={{ py: 2 }}>
              <Button
                variant="contained"
                size="small"
                color="secondary"
                startIcon={<TextsmsIcon />}
                disabled={mobile.length !== mobileLength || loading}
                onClick={(e: any) => getSMS(e)}
              >
                SMS
              </Button>
            </Stack>
            <Stack direction="row" justifyContent="center" spacing={1}>
              <Button
                variant="contained"
                size="small"
                color="secondary"
                startIcon={<GoogleIcon />}
                onClick={() => openOAuthLoginPage()}
              >
                Login With Google
              </Button>

            </Stack>
          </Grid>
        </>
      )}
      {step === 1 && (
        <>
          <div style={{ visibility: error ? "visible" : "hidden" }}>
            <Alert severity="error"> {error} </Alert>
          </div>
          <CardContent sx={{ textAlign: "center" }}>
            <img src={iconOtp} width={75} />
            <Typography gutterBottom variant="h6" component="div">
              otp
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Please enter the code
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {showOTP}
          </Box>
          <div
            style={{
              direction: "ltr",
              paddingTop: "10px",
              display: "flex",
              justifyContent: " center",
            }}
          >
            <OtpInput
              value={otp}
              onChange={setOtp}
              shouldAutoFocus
              numInputs={otpLength}
              inputType="number"
              inputStyle={{
                textAlign: "center",
                width: "3em",
                height: "3em",
                borderRadius: "5px",
                margin: "0 5px",
                fontSize: "20px",
                border: "1px solid gray",
              }}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <LoadingButton
              type="submit"
              variant="contained"
              size="small"
              sx={{ mt: 3, mb: 2 }}
              disabled={otp.length < otpLength}
              onClick={(e): any => getAnswerOtp(e)}
            >
              Confirm And Continue
            </LoadingButton>
          </div>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ visibility: counter === 0 ? "hidden" : "visible" }}
          >
            You can request a new code in
            <span
              style={{
                width: "25px",
                display: "inline-flex",
                justifyContent: "center",
              }}
            >
              {counter}
            </span>
            seconds
          </Typography>
          <Grid container>
            <Grid item xs>
              <LoadingButton
                variant="contained"
                size="small"
                disabled={counter > 0}
                sx={{ mt: 3, mb: 2, mr: 5 }}
                onClick={(e: any) => getSMS(e)}
              >
                Resend
              </LoadingButton>
            </Grid>
            <Grid item>
              <LoadingButton
                variant="outlined"
                size="small"
                sx={{ mt: 3, mb: 2 }}
                onClick={(e: { preventDefault: () => void; }) => mobile_change(e)}
              >
                Change Number
              </LoadingButton>
            </Grid>
          </Grid>
        </>
      )}
    </LayoutAuth>
  );
};

export default Otp;
