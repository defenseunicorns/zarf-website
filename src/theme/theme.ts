import { createTheme } from '@mui/material';
import TYPEOGRAPHY from './typography';
import COMPONENTS from './components';
import PALLETE from './pallete';

// A custom theme for this app
export default createTheme({
  palette: PALLETE,
  components: COMPONENTS,
  typography: TYPEOGRAPHY
});
