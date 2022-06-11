import { namedLinks } from '../../assets/data/navLinks';
import DuLogo from '../../assets/png/full-du-logo.png';
import { Box, Link, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import SmallBlob from '../SmallBlob';
import ButtonLink from '../ButtonLink';
interface MaintainedByProps {
  tagLine?: string;
}

function MaintainedBy(props: MaintainedByProps): ReactElement {
  const tagLine = props.tagLine || 'Created & Maintained by:';
  return (
    <SmallBlob>
      <Box textAlign={'center'} flexDirection="column" display="flex">
        <Typography variant="h5">{tagLine}</Typography>
        <Link
          href={namedLinks.defenseUnicorns.url}
          target={namedLinks.defenseUnicorns.target}
          rel={namedLinks.defenseUnicorns.rel}
          title={namedLinks.defenseUnicorns.text}
        >
          <Box
            component="img"
            marginTop={'16px'}
            marginBottom={'16px'}
            src={DuLogo}
            alt={namedLinks.defenseUnicorns.text}
            sx={{
              width: { xs: '280px', md: '400px' },
              height: { xs: '60px', md: '85.5px' },
            }}
          />
        </Link>
        <Typography variant="body1">
          For enterprise package support & pricing
        </Typography>
        <Box marginX={'auto'} marginTop={'16px'}>
          <ButtonLink color="secondary" {...namedLinks.enterpriseSupport} />
        </Box>
      </Box>
    </SmallBlob>
  );
}

export default MaintainedBy;
