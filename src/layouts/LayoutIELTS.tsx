import ReactPlayer from "react-player";


// mtu
import WifiIcon from '@mui/icons-material/Wifi';
import ForumIcon from '@mui/icons-material/Forum';
import VideocamIcon from '@mui/icons-material/Videocam';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
// mtu
import "@/styles/ielts.css"
import Logo from '@/assets/images/ielts.png'
import ModalOptions from '@/components/IELTS/ModalOptions';



const LayoutIELTS = ({ children }: any) => {

  return (
    <html data-theme='light' className='ielts'>
      <div className="ielts-header">
        <div className="ielts-container">
          <div className='justify-content-space-between'>
            <div className="d-flex">
              <img src={Logo} alt="ielts" height={40} />
              <div className="align-items-flex-end ml-50">
                <div>59 minutes remaining</div>
                <div className="d-flex ml-20">
                  <VideocamIcon sx={{ mx: 0.5 }} />
                  Live proctoring started
                </div>
              </div>
              {/* <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                width='100%'
                height='100%'
              /> */}
            </div>
            <div className='align-items-center g-20'>
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
              <div><strong>13:15</strong></div>
              <BatteryChargingFullIcon color="action" fontSize="large" sx={{ rotate: '90deg' }} />
              <div className='ielts-footer-btn'>
                <WifiIcon color="action" fontSize="large" />
              </div>
              <div className='ielts-footer-btn'>
                <VolumeDownIcon color="action" fontSize="large" />
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