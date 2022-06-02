import { socialLinks } from '../../assets/data/navLinks';
import DuLogo from '../../assets/png/full-du-logo.png';
import { Box, Link, Typography, Button } from '@mui/material';
import React, { ReactElement } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import SmallBlob from '../SmallBlob';
interface MaintainedByProps {
  tagLine?: string;
}

function MaintainedBy(props: MaintainedByProps): ReactElement {
  const tagLine = props.tagLine || 'Created & Maintained by';
  return (
    <SmallBlob>
      <Box textAlign={'center'} flexDirection="column" display="flex">
        <Typography variant="h5">{tagLine}</Typography>
        <Link
          href={socialLinks.defenseUnicorns.url}
          target={socialLinks.defenseUnicorns.target}
          rel={socialLinks.defenseUnicorns.rel}
          title={socialLinks.defenseUnicorns.text}
        >
          <Box
            component="img"
            marginBottom={'24px'}
            src={DuLogo}
            alt={socialLinks.defenseUnicorns.text}
            sx={{
              width: { xs: '280px', md: '400px' },
              height: { xs: '60px', md: '85.5px' },
            }}
          />
        </Link>
        <Typography variant="body1">
          For enterprise package support & pricing
        </Typography>
        <Button
          component={GatsbyLink}
          to="/enterprise-support"
          color="secondary"
          variant="contained"
          size={'large'}
          sx={{ my: '16px', mx: 'auto' }}
        >
          Contact An Expert
        </Button>
      </Box>
    </SmallBlob>
  );
}

export default MaintainedBy;
