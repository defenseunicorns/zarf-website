import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import { Box, Card, SxProps, Theme, Typography } from '@mui/material';
import CardBackground from '../assets/png/zarf-card.png';

type ZarfCardVariant = 'nocard' | 'card';
type BodyColor = 'text.primary' | 'text.secondary';

export interface ZarfCardProps {
  topImage: string;
  headerFirstLine: string;
  headerSecondLine: string;
  body: string;
  variant?: ZarfCardVariant;
  bodyColor?: BodyColor;
}

const StyledCard = styled(Card)`
  border-radius: 24px;
  width: 286px;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 32px 24px 27px 24px;
`;

function getVariantStyle(variant?: ZarfCardVariant): SxProps<Theme> {
  let sxProps: SxProps<Theme>;
  switch (variant) {
    case 'nocard':
      sxProps = {
        background: 'transparent',
      };
      break;
    default:
      sxProps = {
        backgroundImage: `url(${CardBackground})`,
      };
  }
  return sxProps;
}

function ZarfCard(props: ZarfCardProps): ReactElement {
  const variantStyle = getVariantStyle(props.variant);
  return (
    <StyledCard sx={variantStyle} elevation={0}>
      <Box
        component="img"
        src={props.topImage}
        width={'84px'}
        height={'84px'}
        sx={{ mx: 'auto' }}
      />
      <Typography variant="h5" textAlign={'center'} marginTop={'25px'}>
        {props.headerFirstLine}
      </Typography>
      <Typography variant="h5" textAlign={'center'} marginTop={'4px'}>
        {props.headerSecondLine}
      </Typography>
      <Typography
        variant="body2"
        marginTop={'16px'}
        color={props.bodyColor || 'text.primary'}
      >
        {props.body}
      </Typography>
    </StyledCard>
  );
}

export default ZarfCard;
