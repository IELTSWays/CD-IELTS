import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// mtu
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import wallpaper from "@/assets/images/wallpaper.jpg";
// mtu
import Logo from "@/assets/images/logo.png";

const LayoutAuth = ({ children }: any) => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("token") && navigate("/");
  }, []);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${wallpaper})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: 'center' }}>
            <Box sx={{ mr: 1 }}>
              <img src={Logo} alt="logo" width={170} style={{ borderRadius: '15px' }} />
            </Box>
          </Box>
          <Box component="form">
            {children}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LayoutAuth;