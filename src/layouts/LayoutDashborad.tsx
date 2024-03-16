import React from 'react';
import { useState, useEffect } from 'react'
import { NavLink, useNavigate, useLocation } from "react-router-dom";

// mtu
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { red, grey } from '@mui/material/colors';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SupportIcon from '@mui/icons-material/Support';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RocketIcon from '@mui/icons-material/Rocket';
import SchoolIcon from '@mui/icons-material/School';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
// mtu

import logo from '@/assets/images/logo.png'
import iconDashboard from '@/assets/images/monitor.gif'
import iconProfile from '@/assets/images/profile.png'
import iconBooks from '@/assets/images/interface.gif'
import iconPayment from '@/assets/images/payment.gif'
import iconSpeaking from '@/assets/images/chat.gif'
import iconGuide from '@/assets/images/algorithm.gif'
import iconChart from '@/assets/images/chart.gif'
import iconTicket from '@/assets/images/ticket.gif'

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBarDesktop = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AppBarMobile = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: '100%',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const menuItems = [
  { title: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { title: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
  { title: 'Guide', icon: <SupportIcon />, path: '/guide' },
  { title: 'Tests (Skills)', icon: <LaptopChromebookIcon />, path: '/books', ifProfileFill: true },
  { title: 'Speaking', icon: <KeyboardVoiceIcon />, path: '/speaking', ifProfileFill: true },
  { title: 'Orders', icon: <ShoppingCartCheckoutIcon />, path: '/orders', ifProfileFill: true },
  { title: 'Tickets', icon: <ConfirmationNumberIcon />, path: '/tickets', ifProfileFill: true },
  { title: 'Exams', icon: <RocketIcon />, path: '/exams', ifProfileFill: true },
  // { title: 'Logout', icon: <LogoutIcon />, path: '/logout' },
]

const menuItemsTecher = [
  { title: 'Teacher Profile', icon: <AccountBoxIcon />, path: '/TeacherProfile', ifProfileFill: true },
]

const footerMenuItems = [
  { title: 'Profile', icon: <AccountCircleIcon />, path: '/profile' },
  { title: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { title: 'Orders', icon: <ShoppingCartCheckoutIcon />, path: '/orders', ifProfileFill: true },
  { title: 'Tests', icon: <LaptopChromebookIcon />, path: '/books', ifProfileFill: true },
  { title: 'Exams', icon: <RocketIcon />, path: '/exams', ifProfileFill: true },
]

const pageHeader = [
  {
    title: 'Dashboard',
    description: 'You can see an overview of your performance.',
    icon: iconDashboard,
    path: '/'
  },
  {
    title: 'Profile',
    description: 'We appreciate your time and effort in completing this form. Please make sure that all the information you provide is correct and up-to-date. Thank you for your cooperation',
    icon: iconProfile,
    path: '/profile'
  },
  {
    title: 'Guide',
    description: 'Choose one of the following options and proceed with the flow-chart.',
    icon: iconGuide,
    path: '/guide'
  },
  {
    title: 'Tests (Skills)',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, expedita!',
    icon: iconBooks,
    path: '/books',
  },
  {
    title: 'Speaking',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, expedita!',
    icon: iconSpeaking,
    path: '/speaking'
  },
  {
    title: 'Orders',
    description: 'The list of your orders and their latest status.',
    icon: iconPayment,
    path: '/orders'
  },
  {
    title: 'Reports',
    description: 'The report of your latest tests.',
    icon: iconChart,
    path: '/reports'
  },
  {
    title: 'Tickets',
    description: 'Your latest tickets.',
    icon: iconTicket,
    path: '/tickets'
  },
]


const LayoutDashborad = ({ children }: any) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [pathPage, setPathPage] = useState<any>();

  useEffect(() => {
    setPathPage(location.pathname)
  }, [location.pathname]);

  const index = pageHeader.findIndex(x => x.path === pathPage);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* show left menu in desktop */}
      <AppBarDesktop position="fixed" open={open} sx={{ display: { xs: 'none', sm: 'flex', background: "#E21D38" } }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            IELTSWAYS
          </Typography>
        </Toolbar>
      </AppBarDesktop>

      {/* hide left menu in mobile */}
      <AppBarMobile open={open} sx={{ display: { xs: 'flex', sm: 'none', background: "#E21D38" } }}>
        <Toolbar sx={{ width: '100%', justifyContent: 'center' }}>
          <Typography variant="h6" noWrap component="div">
            IELTSWAYS
          </Typography>
        </Toolbar>
      </AppBarMobile>

      {/* show button menu in mobile */}
      <Grid sx={{ position: 'fixed', bottom: 0, width: '100%', background: '#ebebeb', zIndex: 100, display: { xs: 'flex', sm: 'none' } }}>
        <Toolbar sx={{ width: '100%' }}>
          <Grid
            container
            sx={{
              padding: "0 20px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {footerMenuItems.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={() => {
                    setPathPage(`${item.path}`)
                    navigate(`${item.path}`);
                  }}
                  sx={{ pointerEvents: 'none', }}
                >
                  <IconButton
                    disabled={item.ifProfileFill && !localStorage.getItem('is_profile_fill')}
                    sx={{ color: location.pathname === item.path && "#E21D38", pointerEvents: 'none', }}
                  >
                    {item.icon}
                  </IconButton>
                </NavLink>
              )
            })}
          </Grid>
        </Toolbar>
      </Grid>

      <Drawer variant="permanent" open={open} sx={{ display: { xs: 'none', sm: 'flex' } }}>
        <DrawerHeader sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <NavLink to="/">
            <img src={logo} alt="IELTSWAYS" width={120} />
          </NavLink>
          <IconButton onClick={handleDrawerClose} color="error">
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  color: location.pathname === item.path && grey[100],
                  backgroundColor: location.pathname === item.path && "#E21D38",
                  '&:hover': {
                    color: location.pathname === item.path && grey[100],
                    backgroundColor: location.pathname === item.path && "#E21D38",
                  },
                }}
                disabled={item.ifProfileFill && !localStorage.getItem('is_profile_fill')}
                onClick={() => {
                  setPathPage(`${item.path}`)
                  navigate(`${item.path}`);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: location.pathname === item.path && "#fff"
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List sx={{ background: 'lightgoldenrodyellow' }}>
          <Typography variant="button" display="block" align="center" gutterBottom>
            <SchoolIcon/>
          </Typography>
          {menuItemsTecher.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  color: location.pathname === item.path && grey[100],
                  backgroundColor: location.pathname === item.path && "#E21D38",
                  '&:hover': {
                    color: location.pathname === item.path && grey[100],
                    backgroundColor: location.pathname === item.path && "#E21D38",
                  },
                }}
                disabled={item.ifProfileFill && !localStorage.getItem('is_profile_fill')}
                onClick={() => {
                  setPathPage(`${item.path}`)
                  navigate(`${item.path}`);
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: location.pathname === item.path && "#fff"
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* header-items */}
        <Grid
          container
          style={{ marginTop: '20px' }}
          sx={{
            backgroundColor: '#fff', borderRadius: '10px', padding: '0px 20px', display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          spacing={{ md: 5 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <div style={{
            // position: 'absolute;',
            top: '0px',
            width: '40px',
            height: '40px',
            backgroundColor: 'rgb(243, 243, 243)',
            borderRadius: '50%',
            transform: 'translate(0, -50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>

          </div>
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
            }}
          >
            <ListItem>
              <img src={index === -1 ? logo :
                pageHeader[index].icon} width={30} style={{ marginRight: '10px' }} />
              <ListItemText primary={index === -1 ? 'ieltsways' : pageHeader[index].title} />
            </ListItem>
            <Divider component="li" />
            <li>
              <Typography
                sx={{ mt: 0.5, mb: 2.5, ml: 2 }}
                color="text.secondary"
                display="block"
              >
                {index === -1 ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iusto.' : pageHeader[index].description}
              </Typography>
            </li>
          </List>
        </Grid>
        <Grid
          container
          sx={{ backgroundColor: '#fff', borderRadius: '10px', mt: 3, mb: 12, p: 3 }}
        >
          {children}
        </Grid>
      </Box>
    </Box>
  );
};

export default LayoutDashborad;