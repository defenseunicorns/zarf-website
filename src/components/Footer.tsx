import SocialLinks from './SocialLinks';
import { Box, styled, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import Zarf from '../assets/png/zarf-footer.png';
import { PathRequired } from '../interfaces/Pathname';
import { Link } from 'gatsby';

const FooterContainer = styled(Box)`
  height: 243px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 41px;
`;

const ZarfImage = styled(Box)`
  height: 100px;
  width: 100px;
` as typeof Box; // Need to type cast to maintain the prop switching based on component prop;

function Footer({ pathname }: PathRequired): ReactElement {
  return (
    <FooterContainer sx={{ mb: { xs: '93px', md: '110px' } }}>
      <Link to="/">
        <ZarfImage component="img" src={Zarf} />
      </Link>
      <Box>
        <SocialLinks pathname={pathname} />
      </Box>
      <Typography variant="caption">
        Copyright © 2022 Zarf Project. All rights reserved
      </Typography>
    </FooterContainer>
  );
}

export default Footer;
