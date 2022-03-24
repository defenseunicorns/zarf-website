import { createTheme, Theme } from '@mui/material';

const fontWeights = {
  medium: 500,
  regular: 400
};

const fonts = {
  roboto: 'Roboto',
  mPlusRoundedFont: '"M PLUS Rounded 1c"'
};

export const PALLETE = Object.freeze({
  primary: {
    main: '#4ADEDE',
    dark: '#44A4C2',
    light: '#B0FFFF',
    contrastText: '#000000'
  },
  background: {
    default: '#10184C',
    paper: '#10184C'
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
  contrastThreshold: 1,
  divider: '#FFFFFF1F'
});

export const COMPONENTS = Object.freeze({
  MuiSnackbarContent: {
    styleOverrides: {
      root: {
        background: '#1F2F98'
      }
    }
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        borderColor: '#FFFFFF6B'
      }
    }
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
  palette: { ...PALLETE },
  components: { ...COMPONENTS },
  typography: {
    ...TYPEOGRAPHY
  }
});

export default theme;
