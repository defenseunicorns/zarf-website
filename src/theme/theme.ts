import { createTheme } from '@mui/material';
import TYPOGRAPHY from './typography';
import COMPONENTS from './components';
import PALETTE from './palette';

// A custom theme for this app
export default createTheme({
  palette: PALETTE,
  components: COMPONENTS,
  typography: TYPOGRAPHY
});
