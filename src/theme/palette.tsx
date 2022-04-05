import { PaletteOptions, SimplePaletteColorOptions } from '@mui/material';

interface DefaultPaletteOptions extends PaletteOptions {
  primary?: SimplePaletteColorOptions;
}

const palette: DefaultPaletteOptions = {
  primary: {
    main: '#4ADEDE',
    dark: '#44A4C2',
    light: '#B0FFFF',
    contrastText: '#000000'
  },
  secondary: {
    main: '#787FF6',
    dark: '#4053C2',
    light: '#ADAEFF'
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
};

export default Object.freeze(palette);
