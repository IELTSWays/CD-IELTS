import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

// mtu
import Chip from '@mui/material/Chip';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';

import WifiIcon from '@mui/icons-material/Wifi';
import ForumIcon from '@mui/icons-material/Forum';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
// mtu

import "@/styles/ielts.css"
import Logo from '@/assets/images/ielts.png'
import ModalOptions from '@/components/IELTS/ModalOptions';
import useTimeNow from '@/components/useTimeNow';

const skillTimes = {
  writing: '1 hour',
  reading: '1 hour',
  listening: '30 minutes',
};

const LayoutConfirm = ({ children }: any) => {

  const { id } = useParams()
  const navigate = useNavigate();
  const { timeNow } = useTimeNow();
  const skillTime = skillTimes[id];

  return (
    <html data-theme='light' className='ielts'>
      <div className="ielts-header">
        <div className="ielts-container">
          <div className='justify-content-space-between'>
            <div className="d-flex">
              <img src={Logo} alt="ielts" height={30} className='pointer' onClick={() => navigate("/")} />
            </div>
            <div className="align-items-flex-end">
            <Grid container>
            <Typography variant="h6" sx={{ color: "#E21D38"}} > 
              IELTS Online <span className="capitalize"> {id} </span>Test tutorial 
            </Typography>
            
            <Chip color="primary" sx={{ ml: 2 }} label={skillTime} variant="outlined" />
            
          </Grid>
            </div>
            <div className='align-items-center g-20'>
              <WifiIcon color="action" fontSize="small" />
              <NotificationsNoneIcon color="action" fontSize="small" />
              <ModalOptions fontSize="small" />
              <ForumIcon color="action" fontSize="small" />
              <EditCalendarIcon color="action" fontSize="small" />
            </div>
          </div>
        </div>
      </div>

      <div className='ielts-main' style={{ overflowY: 'auto' }}>
        {children}
      </div>

      <div className='ielts-footer'>
        <div className='ielts-container'>
          <div className='justify-content-space-between'>
            <div className='align-items-flex-end'>
              inspera assessment
            </div>
            <div className='align-items-center g-20'>
              <div><strong>{timeNow}</strong></div>
              <BatteryChargingFullIcon color="action" fontSize="small" sx={{ rotate: '90deg' }} />
              <div className='ielts-footer-btn'>
                <WifiIcon color="action" fontSize="small" />
              </div>
              <div className='ielts-footer-btn'>
                Exit
              </div>
            </div>
          </div>
        </div>
      </div>
    </html>
  );
};

export default LayoutConfirm;