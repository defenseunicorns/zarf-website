import { red, purple } from '@mui/material/colors';
import { createTheme } from '@mui/material';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: purple[600]
    },
    secondary: {
      main: purple[600]
    },
    error: {
      main: red.A400
    }
  }
});

export default theme;
