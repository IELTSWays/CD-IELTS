import React from 'react';
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

// mtu
import Button from '@mui/material/Button';
import WifiIcon from '@mui/icons-material/Wifi';
import ForumIcon from '@mui/icons-material/Forum';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
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

import useGetTests from '@/services/Requests/useGetTests';
import usePostTestDone from '@/services/Requests/usePostTestDone';

const LayoutIELTS = ({ children }: any) => {

  const location = useLocation();
  const navigate = useNavigate();

  const { refetch } = usePostTestDone()

  const writingSaved = useAppSelector((state: any) => state.user.writingSaved)
  
  const { timeNow } = useTimeNow();
  const { timer } = useTimer('1920')

  const [isPlaying, setIsPlaying] = useState('')

  const {
    refetch: refetchGetTests,
  } = useGetTests<any>(localStorage.getItem('test_id'))

  function handlePlayStatusChange(isPlaying: any) {
    setIsPlaying(isPlaying);
  }

  useEffect(() => {
    refetchGetTests()
  }, [])

  const contrast = useAppSelector((state: any) => state.user.contrast)

  return (
    <html data-theme={contrast} className='ielts'>
      <div className="ielts-header">
        <div className="ielts-container">
          <div className='justify-content-space-between'>
            <div className="d-flex">
              <img src={Logo} alt="ielts" height={30} className='pointer' onClick={() => navigate("/")} />
              <div className="align-items-flex-end ml-50">
                <div style={{ width: '170px' }}>
                  {timer}</div>
                {
                  <div className="d-flex ml-20" style={{ visibility: isPlaying ? 'visible' : 'hidden' }}>
                    {(location.pathname.includes('Listening') || location.pathname.includes('listening')) &&
                      <>
                        <VolumeUpIcon sx={{ mx: 0.5 }} fontSize="small" />
                        Audio is playing
                      </>
                    }

                    {(location.pathname.includes('Reading') || location.pathname.includes('reading')) &&
                      <>
                        <VideocamIcon sx={{ mx: 0.5 }} fontSize="small" />
                        Live proctoring started
                      </>
                    }
                  </div>
                }
              </div>
            </div>

            <Button variant="outlined" onClick={() => refetch()} size="small">
              FINISH
            </Button>

            <div className='align-items-center g-20'>
              {location.pathname.includes('writing') &&
                writingSaved === 'true' && 'Saved'
              }
              <WifiIcon color="action" fontSize="small" />
              <NotificationsNoneIcon color="action" fontSize="small" />
              <ModalOptions fontSize="small" />
              <ForumIcon color="action" fontSize="small" />
              <EditCalendarIcon color="action" fontSize="small" />
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
              <BatteryChargingFullIcon color="action" fontSize="small" sx={{ rotate: '90deg' }} />
              <div className='ielts-footer-btn'>
                <WifiIcon color="action" fontSize="small" />
              </div>
              {
                (location.pathname.includes('Listening') || location.pathname.includes('listening')) &&
                listSongs.songs.length > 0 && <AudioPlayer songs={listSongs.songs} onPlayStatusChange={handlePlayStatusChange} />
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