import React, { ReactElement, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ZarfNav from '../components/nav-bar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar
} from '@mui/material';

function BasicSelect(): ReactElement {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent): void => {
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

function SimpleSnackbar(): ReactElement {
  const [open, setOpen] = useState(false);

  const handleClick = (): void => {
    setOpen(true);
  };

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ): void => {
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

export default function Index(): ReactElement {
  return (
    <>
      <ZarfNav />
      <SimpleSnackbar />
      <BasicSelect />
    </>
  );
}
