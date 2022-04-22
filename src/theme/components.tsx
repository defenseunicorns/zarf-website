import { Components } from '@mui/material/styles/components';
import palette from './palette';

const components: Components = {
  MuiSnackbarContent: {
    styleOverrides: {
      root: {
        background: '#1F2F98',
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        borderColor: '#FFFFFF6B',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '20px',
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        ':hover': {
          backgroundColor: palette.action?.hover,
        },
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        ':hover': {
          backgroundColor: palette.action?.hover,
        },
      },
    },
  },
};
export default Object.freeze(components);
