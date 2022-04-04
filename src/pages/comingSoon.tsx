import React from 'react';
import Box from '@mui/material/Box';

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  border: '5px solid red'
};

// markup
function ComingSoon() {
  return (
    <Box
      style={pageStyles}
      sx={{
        width: '100vw',
        maxWidth: 120,
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <title>Coming Soon!</title>
      <h1>testasdalsdlaksdlkajslkdjasjdkas</h1>
    </Box>
  );
}

export default ComingSoon;
