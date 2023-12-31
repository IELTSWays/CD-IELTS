import { useState, forwardRef } from 'react';
import { QueryClient, QueryCache, QueryClientProvider } from '@tanstack/react-query'
import { Provider as ReduxProvider } from 'react-redux'
import { Navigate } from 'react-router-dom';
// mtu
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// mtu
import "@/services/Translate/i18nextInit";

import MainRoutes from "@/routes/MainRoutes";
import { store } from '@/store/store'

const App = () => {

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string>('');


  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleClick = () => { setOpen(true); };
  const handleClose = (): any => {
    setOpen(false);
  };

  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onSuccess: (data) => {
        // console.log(data);
        // handleClick()
      },
      onError: (error): any => {
        if (error) {
          if (error?.response?.status == 401) {
            setMessage(error?.response?.data?.detail)
            // window.location = '/otp';
          }
          setMessage(error.message)
          if (error?.request?.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/otp'; 
          }
          handleClick()
        }
      },
    }),
    defaultOptions: {
      queries: {
        retry: 2,
        retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000)
      },
      onError: (error: { response: { status: number; }; }) => {
        // if (error.response.status === 401) {
        //   console.log(error)
        //   localStorage.removeItem('token');
        //   <Navigate to="/otp" />
        // }
      },
    },
  })

  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <MainRoutes />
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          action={action}
        >
          <Alert onClose={handleClose} severity="error">
            {message}
          </Alert>
        </Snackbar>
      </QueryClientProvider>
    </ReduxProvider>

  );
}

export default App;