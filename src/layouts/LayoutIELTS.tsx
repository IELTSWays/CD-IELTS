import React from 'react';
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

// mtu
import Button from '@mui/material/Button';
import WifiIcon from '@mui/icons-material/Wifi';
import ForumIcon from '@mui/icons-material/Forum';
import ReorderIcon from '@mui/icons-material/Reorder';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideocamIcon from '@mui/icons-material/Videocam';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setShowOptions } from '@/store/slices/user/userSlice'
// store

import "@/styles/ielts.css"
import Logo from '@/assets/images/ielts.png'
import ModalOptions from '@/components/IELTS/ModalOptions';
import useTimeNow from '@/components/useTimeNow';
import useTimer from '@/components/useTimer';

import { AudioPlayer } from "@/components/AudioPlayer";

import useGetTests from '@/services/Requests/useGetTests';
import usePostTestDone from '@/services/Requests/usePostTestDone';
import usePostTestDoneWriting from '@/services/Requests/usePostTestDoneWriting';

import IELTS from "@/pages/IELTS"

// 13
import B13LT2 from '@/pages/IELTS/Audios/B13LT2.json'
import B13LT4 from '@/pages/IELTS/Audios/B13LT4.json'

// 14
import B14LT1 from '@/pages/IELTS/Audios/B14LT1.json'
import B14LT2 from '@/pages/IELTS/Audios/B14LT2.json'
import B14LT3 from '@/pages/IELTS/Audios/B14LT3.json'
import B14LT4 from '@/pages/IELTS/Audios/B14LT4.json'

// 16
import B16LT3 from '@/pages/IELTS/Audios/B16LT3.json'

// 17
import B17LT1 from '@/pages/IELTS/Audios/B17LT1.json'
import B17LT2 from '@/pages/IELTS/Audios/B17LT2.json'
import B17LT3 from '@/pages/IELTS/Audios/B17LT3.json'
import B17LT4 from '@/pages/IELTS/Audios/B17LT4.json'

// 18
import B18LT1 from '@/pages/IELTS/Audios/B18LT1.json'

const LayoutIELTS = ({ children }: any) => {

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const { refetch } = usePostTestDone()
  const { timeNow } = useTimeNow();
  const { timer } = useTimer('1920')

  const [isPlaying, setIsPlaying] = useState('')

  const {
    refetch: refetchGetTests,
  } = useGetTests<any>(localStorage.getItem('test_id'))

  const {
    refetch: refetchTestDoneWriting,
  } = usePostTestDoneWriting<any>(localStorage.getItem('test_id'))

  function handlePlayStatusChange(isPlaying: any) {
    setIsPlaying(isPlaying);
  }

  useEffect(() => {
    refetchGetTests()
  }, [])

  const contrast = useAppSelector((state: any) => state.user.contrast)
  const showOptions = useAppSelector((state: any) => state.user.showOptions)
  const writingSaved = useAppSelector((state: any) => state.user.writingSaved)

  const tests = {
    'B13LT2': B13LT2,
    'B13LT4': B13LT4,
    'B14LT1': B14LT1,
    'B14LT2': B14LT2,
    'B14LT3': B14LT3,
    'B14LT4': B14LT4,
    'B16LT3': B16LT3,
    'B17LT1': B17LT1,
    'B17LT2': B17LT2,
    'B17LT3': B17LT3,
    'B17LT4': B17LT4,
    'B18LT1': B18LT1
  };

  return (
    <html data-theme={contrast} className='ielts'>

      {showOptions == 1 ?
        <div>
          <ModalOptions />
        </div>
        :
        <>
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

                {/* {(location.pathname.includes('listening') || location.pathname.includes('reading')) &&
                  <Button variant="outlined" onClick={() => refetch()} size="small">
                    FINISH
                  </Button>
                } */}

                {/* {location.pathname.includes('writing') &&
                <Button variant="outlined" onClick={() => refetchTestDoneWriting()} size="small">
                  FINISH Writing
                </Button>
                } */}

                <div className='align-items-center g-20'>
                  {/* {location.pathname.includes('writing') &&
                    writingSaved === 'true' && 'Saved'
                  } */}
                  <WifiIcon color="action" fontSize="small" />
                  <NotificationsNoneIcon color="action" fontSize="small" />
                  {/* <ModalOptions fontSize="small" /> */}
                  <ReorderIcon color="action" fontSize="small" className="pointer" onClick={() => dispatch(setShowOptions(1))} />
                  <ForumIcon color="action" fontSize="small" />
                  <EditCalendarIcon color="action" fontSize="small" />
                </div>
              </div>
            </div>
          </div>

          <div className='ielts-main'>
            <IELTS />
            {/* {children} */}
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
                    (/listening/i.test(location.pathname)) && (() => {
                      const testName: any = localStorage.getItem('test_name');
                      const testData = tests[testName];
                      return testData && testData.songs && testData.songs.length > 0 && (
                        <AudioPlayer songs={testData.songs} onPlayStatusChange={handlePlayStatusChange} />
                      );
                    })()
                  }
                  <div className='ielts-footer-btn'>
                    Exit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </html>
  );
};

export default LayoutIELTS;