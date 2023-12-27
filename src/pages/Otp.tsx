import { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";
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
import TextsmsIcon from '@mui/icons-material/Textsms';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
      navigate("/profile")
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

  // useEffect(() => {
  //   otp.length === otpLength && (e :any) => getAnswerOtp(e)
  // }, [otp]);

  // STEP-0
  // const getSMS = async (e: any) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError(false);
  //   try {
  //     const response = await api.post("accounts/otp", {
  //       'phone_number': mobile.toString()
  //     });
  //     setStep(1);
  //     setCounter(watingTime);
  //     setShowOTP(response.data.data.otp_code);
  //   } catch (error) {
  //     setError(error);
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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
              {step === 0 && "The code will be sent via SMS, Telegram, Whatsapp"}
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
            <Stack direction="row" spacing={1}>
              <Button
                variant="contained"
                size="small"
                color="secondary"
                startIcon={<TextsmsIcon />}
                disabled={mobile.length !== mobileLength || loading}
                onClick={(e: any) => getSMS(e)}>
                SMS
              </Button>
              <Button
                variant="contained"
                startIcon={<TelegramIcon />}
                disabled={mobile.length !== mobileLength || loading}
                onClick={(e: any) => getTeleram(e)}>
                Telegram
              </Button>
              <Button
                variant="contained"
                size="small"
                color="success"
                startIcon={<WhatsAppIcon />}
                disabled={mobile.length !== mobileLength || loading}
                onClick={(e: any) => getWhatsapp(e)}>
                Whatsapp
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
              disabled={otp.length < otpLength}
              // loading={loading}
              sx={{ mt: 3, mb: 2 }}
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
function getAnswerOtp(e: any) {
  throw new Error("Function not implemented.");
}

