import { Components } from '@mui/material/styles/components';
import PALETTE from './palette';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    rounded: true;
  }
}

const components: Components = {
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
  },
  MuiButton: {
    variants: [
      {
        props: { variant: 'rounded', size: 'large' },
        style: {
          width: '170px',
          height: '45px',
          borderRadius: '20px',
          backgroundColor: PALETTE.primary?.main,
          color: 'black',
          '&:hover': {
            backgroundColor: PALETTE.primary?.dark
          }
        }
      },
      {
        props: { variant: 'rounded', size: 'medium' },
        style: {
          borderRadius: '20px',
          backgroundColor: PALETTE.primary?.main,
          color: 'black',
          '&:hover': {
            backgroundColor: PALETTE.primary?.dark
          }
        }
      }
    ]
  }
};
export default Object.freeze(components);
