/* eslint-disable */
import { getGithubStats, GithubStats } from '../utils/githubApi';
import StatsCardSmPng from '../assets/png/stats-card-sm.png';
import ZarfBubbles from '../assets/png/zarf-bubbles.png';
import StatsCardPng from '../assets/png/stats-card.png';
import { Box, styled, Typography } from '@mui/material';
import { hideLarge, hideSmall } from '../utils/display';
import { socialLinks } from '../assets/data/navLinks';
import NavLink from '../interfaces/NavLink';
import onResize from '../hooks/onResize';
import FlexButton from './FlexButton';
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
  justify-content: space-evenly;
  overflow: hidden;
` as typeof Box;

const CardBackground = styled(Box)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 24px;
` as typeof Box;

const contributingProps: NavLink = {
  ...socialLinks.github,
  text: 'start contributing',
};

interface StatProps {
  title: string | number;
  subtitle: string;
}
function Stat({ title, subtitle }: StatProps): ReactElement {
  return (
    <Box textAlign={'center'} minWidth="90px">
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h6" fontFamily={'Roboto'}>
        {subtitle}
      </Typography>
    </Box>
  );
}

function ZarfBox(props: { top?: number; right?: number }): ReactElement {
  return (
    <Box
      component="img"
      src={ZarfBubbles}
      alt="Zarf Bubbles"
      sx={{
        ...hideSmall,
        width: '262px',
        height: '260px',
        position: 'absolute',
        right: props.right,
        top: props.top,
      }}
    />
  );
}

const MIN_CARD_HEIGHT = 480;
const CARD_HEIGHT_MULTIPLIER = 0.389;
const ZARF_TOP_MULTIPLIER = 0.53;

function calculateCardHeight(width: number): number {
  const calculated = width * CARD_HEIGHT_MULTIPLIER;
  return calculated > MIN_CARD_HEIGHT ? calculated : MIN_CARD_HEIGHT;
}

function StatsCard(): ReactElement {
  const [cardHeight, setCardHeight] = useState<number>();
  const [cardWidth, setCardWidth] = useState<number>();
  const [zarfRight, setZarfRight] = useState<number>();
  const [zarfTop, setZarfTop] = useState<number>();
  const [githubStats, setGithubStats] = useState<GithubStats>();
  const wrapperRef = useRef<HTMLDivElement>();

  onResize(
    useCallback(() => {
      if (!wrapperRef.current) return;
      const newHeight = calculateCardHeight(wrapperRef.current.clientWidth);
      setZarfTop(newHeight * ZARF_TOP_MULTIPLIER);
      setZarfRight(wrapperRef.current.offsetLeft);
      setCardHeight(newHeight);
      setCardWidth(wrapperRef.current.clientWidth);
    }, [wrapperRef.current]),
  );

  useEffect(() => {
    getGithubStats().then(res => {
      setGithubStats(res);
    });
  }, []);

  return (
    <Box
      component="div"
      sx={{ width: '100%', px: '8px', position: 'relative' }}
    >
      <StatsCardWrapper
        ref={wrapperRef}
        component="section"
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '16px', md: '80px' },
          mx: 'auto',
          width: { xs: 'fit-content', md: '100%' },
          height: { md: cardHeight },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          maxWidth="418px"
          sx={{ mb: '16px', px: '16px' }}
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
            <FlexButton {...contributingProps}></FlexButton>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
        >
          <Box>
            <Box
              display="flex"
              sx={{
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: '16px', md: '80px' },
              }}
            >
              <Stat title={githubStats?.stars || ''} subtitle="Stars" />
              <Stat
                title={githubStats?.pullRequests || ''}
                subtitle="Pull Requests"
              />
            </Box>
            <Box
              display="flex"
              sx={{
                flexDirection: { xs: 'column', md: 'row' },
                mt: '16px',
                position: 'relative',
              }}
            >
              <Stat
                title={githubStats?.contributors || ''}
                subtitle="Contributors"
              />
            </Box>
            <Box sx={{ ...hideLarge, my: '48px' }}>
              <FlexButton {...contributingProps}></FlexButton>
            </Box>
          </Box>
        </Box>
        <CardBackground component="img" src={StatsCardPng} sx={hideSmall} />
        <CardBackground component="img" src={StatsCardSmPng} sx={hideLarge} />
      </StatsCardWrapper>
      <ZarfBox top={zarfTop} right={zarfRight} />
    </Box>
  );
}

export default StatsCard;
