import { useState, useEffect } from 'react'
import useSound from 'use-sound'
import { useLocation, useNavigate } from 'react-router-dom';

// mtu
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import WifiIcon from '@mui/icons-material/Wifi';
import ForumIcon from '@mui/icons-material/Forum';
import VideocamIcon from '@mui/icons-material/Videocam';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
// store

import "@/styles/ielts.css"
import Logo from '@/assets/images/ielts.png'
import mySound from '@/assets/sounds/14/1/section-1.mp3'
import ModalOptions from '@/components/IELTS/ModalOptions';
import useTimeNow from '@/components/useTimeNow';

const LayoutIELTS = ({ children }: any) => {

  const [showVolume, setShowVolume] = useState(false);
  const [volume, setVolume] = useState<number>(50);

  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
  };

  const [isPlaying, setIsPlaying] = useState(false);

  const [playSound, { pause }] = useSound(mySound,
    {
      volume: (volume / 100)
    },
    {
      onplay: () => setIsPlaying(true),
      onend: () => setIsPlaying(false),
    })

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      playSound();
    }
    setIsPlaying(!isPlaying);
  }

  const writingSaved = useAppSelector((state) => state.user.writingSaved)


  const { timeNow } = useTimeNow();

  console.log(timeNow)

  // TIMER
  const [counter, setCounter] = useState<any>(700);
  const [timer, setTimer] = useState<any>('');

  const formatFull = (s: number) =>
    (new Date(s * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];

  const formatHours = (s: number) =>
    ((new Date(s * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]).slice(0, -6) + ' Hours remaining';
  const formatMinutes = (s: number) =>
    ((new Date(s * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]).slice(3, -3) + ' Minutes remaining ';
  const formatSeconds = (s: number) =>
    ((new Date(s * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]).slice(6) + ' Seconds remaining';

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    localStorage.setItem("counter", counter);
    { counter > 3600 && setTimer(formatHours(counter)) }
    { counter < 3600 && counter > 60 && setTimer(formatMinutes(counter)) }
    { counter < 60 && setTimer(formatSeconds(counter)) }
    { counter == 0 && setTimer("FINISH !") }
  }, [counter]);

  useEffect(() => {
    localStorage.getItem("counter") && setCounter(localStorage.getItem("counter"));
  }, []);
  // TIMER

  // AUTO PLAY SOUND
  useEffect(() => {
    location.pathname.includes('Listening') && togglePlay()
  }, []);

  return (
    <html data-theme='light' className='ielts'>
      <div className="ielts-header">
        <div className="ielts-container">
          <div className='justify-content-space-between'>
            <div className="d-flex">
              <img src={Logo} alt="ielts" height={40} className='pointer' onClick={() => navigate("/")} />
              <div className="align-items-flex-end ml-50">
                <div style={{ width: '170px' }}>{timer}</div>
                <span> {formatFull(counter)} </span>
                <div className="d-flex ml-20">
                  <VideocamIcon sx={{ mx: 0.5 }} />
                  Live proctoring started
                </div>
              </div>
            </div>

            <div className='align-items-center g-20'>
              {location.pathname.includes('Listening') &&
                <button onClick={() => togglePlay()} style={{ width: '70px' }}>
                  {isPlaying ? 'pause' : 'Play'}
                </button>
              }
              {location.pathname.includes('writing') &&
                writingSaved === 'true' && 'Saved'
              }
              <WifiIcon color="action" fontSize="large" />
              <NotificationsNoneIcon color="action" fontSize="large" />
              <ModalOptions />
              <ForumIcon color="action" fontSize="large" />
              <EditCalendarIcon color="action" fontSize="large" />
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
              <BatteryChargingFullIcon color="action" fontSize="large" sx={{ rotate: '90deg' }} />
              <div className='ielts-footer-btn'>
                <WifiIcon color="action" fontSize="large" />
              </div>
              <div className='ielts-footer-btn relative'>
                <span className="d-flex" onClick={() => setShowVolume(!showVolume)}>
                  {volume == 0 && <VolumeMuteIcon color="action" fontSize="large" />}
                  {volume > 0 && volume < 50 && <VolumeDownIcon color="action" fontSize="large" />}
                  {volume >= 50 && <VolumeUpIcon color="action" fontSize="large" />}
                </span>
                {showVolume &&
                  <Box sx={{ width: 150 }} className="volume-controller">
                    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                      <Slider aria-label="Volume" value={volume} defaultValue={50} onChange={handleChange} />
                    </Stack>
                  </Box>
                }
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

export default LayoutIELTS;