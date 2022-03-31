import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar
} from '@mui/material';

function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box
      sx={{
        width: 'full',
        maxWidth: 120,
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <FormControl
        variant="filled"
        sx={{
          minWidth: 120,
          maxWidth: 200,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

function SimpleSnackbar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mt: '10rem',
        flexDirection: { xs: 'column', xl: 'row' }
      }}
    >
      <Button
        size="large"
        sx={{ mx: 'auto' }}
        variant="contained"
        onClick={handleClick}
      >
        Open simple snackbar
      </Button>
      <Button
        size="small"
        sx={{ mx: 'auto' }}
        variant="contained"
        onClick={handleClick}
      >
        Open simple snackbar
      </Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />
    </Box>
  );
}

export default function ButtonAppBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
              Changed
            </Typography>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <SimpleSnackbar />
      <BasicSelect />
    </>
  );
}
