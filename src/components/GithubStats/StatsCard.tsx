import { getGithubStats, GithubStats } from '../../utils/githubApi';
import StatsCardSmPng from '../../assets/png/stats-card-sm.png';
import StatsCardPng from '../../assets/png/stats-card.png';
import { hideLarge, hideSmall } from '../../utils/display';
import { socialLinks } from '../../assets/data/navLinks';
import { Box, styled, Typography } from '@mui/material';
import onResize from '../../hooks/onResize';
import FlexButton from '../FlexButton';
import ZarfBox from './ZarfBox';
import Stat from './Stat';
import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

const StatsCardWrapper = styled(Box)`
  display: flex;
  max-width: 1236px;
  position: relative;
  display: flex;
  text-align: left;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
` as typeof Box;

const CardBackground = styled(Box)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 24px;
` as typeof Box;

const MIN_CARD_HEIGHT = 480;
const CARD_HEIGHT_MULTIPLIER = 0.389;

function calculateCardHeight(width: number): number {
  const calculated = width * CARD_HEIGHT_MULTIPLIER;
  return calculated > MIN_CARD_HEIGHT ? calculated : MIN_CARD_HEIGHT;
}

function StatsCard(): ReactElement {
  const [githubStats, setGithubStats] = useState<GithubStats>();
  const [cardHeight, setCardHeight] = useState<number>();
  const wrapperRef = useRef<HTMLDivElement>();
  const prRef = useRef<HTMLDivElement>();

  const retrieveStats = useCallback(async () => {
    setGithubStats(await getGithubStats());
  }, [setGithubStats]);

  onResize(() => {
    if (wrapperRef.current) {
      const newHeight = calculateCardHeight(wrapperRef.current.clientWidth);
      setCardHeight(newHeight);
    }
  });

  useEffect(() => {
    retrieveStats();
  }, [retrieveStats]);

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        px: '8px',
        position: 'relative',
        overflowX: 'clip',
        overflowY: 'initial',
      }}
    >
      <StatsCardWrapper
        ref={wrapperRef}
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          width: { xs: 'fit-content', md: '100%' },
          gap: { xs: '16px', md: '80px' },
          height: { md: cardHeight },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          maxWidth="418px"
          sx={{ mb: '16px', px: { xs: '16px', md: '0px' } }}
        >
          <Typography
            variant="h6"
            fontFamily="Roboto"
            sx={{ mb: '24px', mt: { xs: '48px', md: 'unset' } }}
          >
            OPEN SOURCE PROJECT
          </Typography>
          <Typography variant="h2" sx={{ my: '24px' }}>
            Join Our Mission
          </Typography>
          <Typography variant="body2" fontFamily="Roboto">
            Zarf makes modern software capabilities a reality in disconnected
            environments. We aim to deliver secure software to the worlds most
            important environments.{' '}
          </Typography>
          <Box sx={{ ...hideSmall, mt: '48px' }}>
            <FlexButton {...socialLinks.startContributing}></FlexButton>
          </Box>
        </Box>
        <Box
          display="flex"
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: '16px', md: '80px' },
          }}
          justifyContent="space-evenly"
        >
          <Box
            display="flex"
            sx={{
              flexDirection: 'column',
              gap: { xs: '16px', md: '40px' },
            }}
          >
            <Stat title={githubStats?.stars || ''} subtitle="Stars" />
            <Stat
              title={githubStats?.contributors || ''}
              subtitle="Contributors"
            />
          </Box>
          <Box
            display="flex"
            sx={{
              flexDirection: 'column',
              position: 'relative',
            }}
            ref={prRef}
          >
            <Stat
              title={githubStats?.pullRequests || ''}
              subtitle="Pull Requests"
            />
          </Box>
          <Box sx={{ ...hideLarge, my: '48px' }}>
            <FlexButton {...socialLinks.startContributing}></FlexButton>
          </Box>
        </Box>
        <CardBackground component="img" src={StatsCardPng} sx={hideSmall} />
        <CardBackground component="img" src={StatsCardSmPng} sx={hideLarge} />
      </StatsCardWrapper>
      <ZarfBox leftAlignRef={prRef} />
    </Box>
  );
}

export default StatsCard;
