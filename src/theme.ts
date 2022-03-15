import { createTheme, Theme } from '@mui/material';

export const COLORS = Object.freeze({
  primary: {
    main: '#4ADEDE',
    dark: '#44A4C2',
    light: '#B0FFFF',
    contrastText: '#000000',
    shades: {
      '4p': '#7BD5F514',
      '8p': '#7BD5F529',
      '12p': '#7BD5F51F',
      '30p': '#7BD5F54D',
      '50p': '#7BD5F580',
      '100p': ''
    }
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#FFFFFFB2',
    disabled: '#FFFFFF80'
  },
  action: {
    active: '#FFFFFF8F',
    hover: '#FFFFFF14',
    selected: '#FFFFFF29',
    disabled: '#FFFFFF4D',
    disabledBackground: '#FFFFFF1F',
    focus: '#FFFFFF1F'
  },
  divider: '#FFFFFF1F',
  components: {
    MuiSnackbarContent: {
      backgroundColor: '#1F2F98'
    }
  }
});

// A custom theme for this app
const theme: Theme = createTheme({
  palette: {
    ...COLORS
  },
  components: {
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          background: COLORS.components.MuiSnackbarContent.backgroundColor
        }
      }
    }
  }
});

export default theme;
