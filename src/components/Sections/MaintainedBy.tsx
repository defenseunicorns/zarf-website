import { socialLinks } from '../../assets/data/navLinks';
import DuLogo from '../../assets/png/full-du-logo.png';
import { Box, Link, Typography, Button } from '@mui/material';
import React, { ReactElement } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import LargeBlob from '../LargeBlob';
interface MaintainedByProps {
  tagLine?: string;
}

function MaintainedBy(props: MaintainedByProps): ReactElement {
  const tagLine = props.tagLine || 'Created & Maintained by';
  return (
    <LargeBlob>
      <Box
        textAlign={'center'}
        flexDirection="column"
        gap={'16px'}
        display="flex"
      >
        <Typography variant="h5">{tagLine}</Typography>
        <Link
          href={socialLinks.defenseUnicorns.url}
          target={socialLinks.defenseUnicorns.target}
          rel={socialLinks.defenseUnicorns.rel}
          title={socialLinks.defenseUnicorns.text}
        >
          <Box
            component="img"
            src={DuLogo}
            alt={socialLinks.defenseUnicorns.text}
            sx={{
              width: { xs: '280px', md: '400px' },
              height: { xs: '60px', md: '85.5px' },
            }}
          />
        </Link>
        <Typography variant="h3" marginY="16px">
          Enterprise Support
        </Typography>
      </Box>
      <Typography
        variant="body1"
        sx={{ maxWidth: { xs: '85%', md: '50%' } }}
        marginY={'16px'}
      >
        Defense Unicorns enterprise subscriptions for package support and
        maintenance can accelerate your delivery and further streamline your
        development cycle.
      </Typography>
      <Button
        component={GatsbyLink}
        to="/enterprise-support"
        color="secondary"
        variant="contained"
        size={'large'}
        sx={{ my: '16px' }}
      >
        Request Pricing
      </Button>
    </LargeBlob>
  );
}

export default MaintainedBy;
