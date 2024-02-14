import { useLocation, useNavigate } from 'react-router-dom';

// mtu
import Button from '@mui/material/Button';
import WifiIcon from '@mui/icons-material/Wifi';
import ForumIcon from '@mui/icons-material/Forum';
import VideocamIcon from '@mui/icons-material/Videocam';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
// store

import "@/styles/ielts.css"
import Logo from '@/assets/images/ielts.png'
import ModalOptions from '@/components/IELTS/ModalOptions';
import useTimeNow from '@/components/useTimeNow';
import useTimer from '@/components/useTimer';

import { AudioPlayer } from "@/components/AudioPlayer";

import listSongs from '@/pages/IELTS/14/01/IELTSListening/Audio/song.json'
import usePostTestDone from '@/services/Requests/usePostTestDone';

const LayoutIELTS = ({ children }: any) => {

  const location = useLocation();
  const navigate = useNavigate();

  const { refetch } = usePostTestDone()

  const writingSaved = useAppSelector((state) => state.user.writingSaved)
  const { timeNow } = useTimeNow();
  const { timer } = useTimer('1920')

  return (
    <html data-theme='light' className='ielts'>
      <div className="ielts-header">
        <div className="ielts-container">
          <div className='justify-content-space-between'>
            <div className="d-flex">
              <img src={Logo} alt="ielts" height={30} className='pointer' onClick={() => navigate("/")} />
              <div className="align-items-flex-end ml-50">
                <div style={{ width: '170px' }}>{timer}</div>
                <div className="d-flex ml-20">
                  <VideocamIcon sx={{ mx: 0.5 }} />
                  Live proctoring started
                </div>
              </div>
            </div>

            <Button variant="outlined" onClick={() => refetch()} size="small">
              FINISH
            </Button>

            <div className='align-items-center g-20'>
              {location.pathname.includes('writing') &&
                writingSaved === 'true' && 'Saved'
              }
              <WifiIcon color="action" fontSize="medium" />
              <NotificationsNoneIcon color="action" fontSize="medium" />
              <ModalOptions />
              <ForumIcon color="action" fontSize="medium" />
              <EditCalendarIcon color="action" fontSize="medium" />
            </div>
          </div>
        </div>
      </div>
      <div className='ielts-main'>
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
              <BatteryChargingFullIcon color="action" fontSize="medium" sx={{ rotate: '90deg' }} />
              <div className='ielts-footer-btn'>
                <WifiIcon color="action" fontSize="medium" />
              </div>
              {(location.pathname.includes('Listening') || location.pathname.includes('listening')) &&
                listSongs.songs.length > 0 && <AudioPlayer songs={listSongs.songs} />
              }
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

export default LayoutIELTS;