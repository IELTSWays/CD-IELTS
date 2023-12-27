import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A700,
    },
  },
});

export default theme;


