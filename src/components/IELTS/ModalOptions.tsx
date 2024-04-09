import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
// mtu
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DialogContent from '@mui/material/DialogContent';
import ListItemButton from '@mui/material/ListItemButton';
import InfoIcon from '@mui/icons-material/Info';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ContrastIcon from '@mui/icons-material/Contrast';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// mtu

// store
import { useAppSelector } from '@/store/hooks'
import { useAppDispatch } from '@/store/hooks'
import { setShowOptions, setfontSize, setcontrast } from '@/store/slices/user/userSlice'
// store

const ModalOptions = () => {

  const [options, setOptions] = useState(0)
  const [contrast, setContrast] = useState(useAppSelector((state: { user: { contrast: any; }; }) => state.user.contrast))
  const [fontSize, setFontSize] = useState(useAppSelector((state: { user: { fontSize: any; }; }) => state.user.fontSize))

  const dispatch = useAppDispatch()
  const location = useLocation();

  const handleFontSize = (fontSize: any) => {
    setFontSize(fontSize)
    dispatch(setfontSize(fontSize))
  };

  const handleContrast = (contrast: any) => {
    setContrast(contrast)
    dispatch(setcontrast(contrast))
  };

  return (
    <div id="ielts-modal-options" style={{ display: location.pathname.includes('confirm') ? 'none' : 'block' }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: 3 }}
      >

        <IconButton
          aria-label="close"
          onClick={() => setOptions(0)}
          sx={{
            color: (theme) => theme.palette.grey[700],
            visibility: options === 0 && 'hidden'
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        <Typography variant="h6">
          {options === 0 && 'Options'}
          {options === 1 && 'Contrast'}
          {options === 2 && 'Text Size'}
        </Typography>

        <IconButton
          aria-label="close"
          onClick={() => dispatch(setShowOptions(0))}
          sx={{
            color: (theme) => theme.palette.grey[900],
          }}
        >
          <CloseIcon />
        </IconButton>
      </Stack>

      {options === 0 &&
        <DialogContent dividers>
          <List
            component="nav">
            <ListItemButton onClick={() => setOptions(1)}>
              <ListItemIcon>
                <ContrastIcon />
              </ListItemIcon>
              <ListItemText primary="Contrast" />
              <ChevronRightIcon />
            </ListItemButton>
            <Divider />
            <ListItemButton onClick={() => setOptions(2)}>
              <ListItemIcon>
                <ZoomInIcon />
              </ListItemIcon>
              <ListItemText primary="Text Size" />
              <ChevronRightIcon />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="Test Instruction" />
              <ChevronRightIcon />
            </ListItemButton>
          </List>
        </DialogContent>
      }

      {options === 1 &&
        <DialogContent dividers>
          <List
            component="nav">
            <ListItemButton onClick={() => handleContrast('BlackWhite')}>
              <ListItemIcon sx={{ visibility: contrast === 'BlackWhite' ? ' visible ' : 'hidden' }}>
                <DoneIcon />
              </ListItemIcon>
              <ListItemText primary="Black on white" />
            </ListItemButton>
            <Divider />
            <ListItemButton onClick={() => handleContrast('WhiteBlack')}>
              <ListItemIcon sx={{ visibility: contrast === 'WhiteBlack' ? ' visible ' : 'hidden' }}>
                <DoneIcon />
              </ListItemIcon>
              <ListItemText primary="White on black" />
            </ListItemButton>
            <Divider />
            <ListItemButton onClick={() => handleContrast('YellowBlack')}>
              <ListItemIcon sx={{ visibility: contrast === 'YellowBlack' ? ' visible ' : 'hidden' }}>
                <DoneIcon />
              </ListItemIcon>
              <ListItemText primary="Yellow on black" />
            </ListItemButton>
          </List>
        </DialogContent>
      }

      {options === 2 &&
        <DialogContent dividers>
          <List
            component="nav">
            <ListItemButton onClick={() => handleFontSize('regular')}>
              <ListItemIcon sx={{ visibility: fontSize === 'regular' ? ' visible ' : 'hidden' }}>
                <DoneIcon />
              </ListItemIcon>
              <ListItemText primary="Regular" />
            </ListItemButton>
            <Divider />
            <ListItemButton onClick={() => handleFontSize('large')}>
              <ListItemIcon sx={{ visibility: fontSize === 'large' ? ' visible ' : 'hidden' }}>
                <DoneIcon />
              </ListItemIcon>
              <ListItemText primary="Large" />
            </ListItemButton>
            <Divider />
            <ListItemButton onClick={() => handleFontSize('extraLarge')}>
              <ListItemIcon sx={{ visibility: fontSize === 'extraLarge' ? ' visible ' : 'hidden' }}>
                <DoneIcon />
              </ListItemIcon>
              <ListItemText primary="Extra Large" />
            </ListItemButton>
          </List>
        </DialogContent>
      }
    </div>
  );
};

export default ModalOptions;