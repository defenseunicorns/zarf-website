import { createTheme, Theme } from '@mui/material';

const fontWeights = {
  medium: 500,
  regular: 400
};

const fonts = {
  roboto: 'Roboto',
  mPlusRoundedFont: '"M PLUS Rounded 1c"'
};

export const COLORS = Object.freeze({
  primary: {
    main: '#4ADEDE',
    dark: '#44A4C2',
    light: '#B0FFFF',
    contrastText: '#000000'
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
  MuiSnackbar: {
    background: '#1F2F98'
  },
  MuiTextField: {
    border: '#FFFFFF6B'
  }
});

export const TYPEOGRAPHY = Object.freeze({
  fontFamily: 'Roboto',
  h1: {
    fontFamily: fonts.mPlusRoundedFont,
    fontSize: 64,
    letterSpacing: -1.5,
    fontWeight: fontWeights.medium
  },
  h2: {
    fontFamily: fonts.mPlusRoundedFont,
    fontSize: 48,
    letterSpacing: -0.5,
    fontWeight: fontWeights.medium
  },
  h3: {
    fontFamily: fonts.mPlusRoundedFont,
    fontSize: 36,
    letterSpacing: 0,
    fontWeigth: fontWeights.regular
  },
  h4: {
    fontFamily: fonts.mPlusRoundedFont,
    fontSize: 24,
    letterSpacing: 0.25,
    fontWeigth: fontWeights.regular
  },
  h5: {
    fontFamily: fonts.mPlusRoundedFont,
    fontSize: 20,
    letterSpacing: 0.15,
    fontWeight: fontWeights.medium
  },
  h6: {
    fontFamily: fonts.mPlusRoundedFont,
    fontSize: 20,
    letterSpacing: 0,
    fontWeight: fontWeights.regular
  },
  subtitle1: {
    fontFamily: fonts.roboto,
    fontSize: 18,
    letterSpacing: 0.15,
    fontWeights: fontWeights.regular
  },
  subtitle2: {
    fontFamily: fonts.roboto,
    fontSize: 16,
    letterSpacing: 0.1,
    fontWeights: fontWeights.medium
  },
  body1: {
    fontFamily: fonts.roboto,
    fontSize: 18,
    letterSpacing: 0.15,
    fontWeights: fontWeights.regular
  },
  body2: {
    fontFamily: fonts.roboto,
    fontSize: 16,
    letterSpacing: 0.15,
    fontWeights: fontWeights.regular
  }
});

// A custom theme for this app
const theme: Theme = createTheme({
  palette: { ...COLORS },
  components: {
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          background: COLORS.MuiSnackbar.background
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderColor: COLORS.MuiTextField.border
        }
      }
    }
  },
  typography: {
    ...TYPEOGRAPHY
  }
});

export default theme;
