import { Components } from '@mui/material';
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
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.42)',
          },
        },
        '& :-webkit-autofill': {
          transitionDelay: '9999999s',
        },
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '24px',
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
