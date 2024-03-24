import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const violetBase = '#7F00FF';
const violetMain = alpha(violetBase, 0.7);

const pinkBase = "#cc00b7";
const pinkBaseMain = alpha(pinkBase, 0.7);


const theme = createTheme({
  palette: {
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A700,
    },
    violet: {
      main: violetMain,
      light: alpha(violetBase, 0.5),
      dark: alpha(violetBase, 0.9),
      contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
    pink: {
      main: pinkBaseMain,
      light: alpha(pinkBase, 0.5),
      dark: alpha(pinkBase, 0.9),
      contrastText: getContrastRatio(pinkBaseMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
});

export default theme;