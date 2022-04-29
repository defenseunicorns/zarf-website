import styled from '@emotion/styled';
import React, { ReactElement } from 'react';
import { Box, Card, Typography } from '@mui/material';
import CardBackground from '../assets/png/zarf-card.png';

export interface ZarfCardProps {
  topImage: string;
  headerFirstLine: string;
  headerSecondLine: string;
  body: string;
}

const StyledCard = styled(Card)`
  background-image: url(${CardBackground});
  border-radius: 24px;
  width: 286px;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  padding: 32px 24px 27px 24px;
`;

function ZarfCard(props: ZarfCardProps): ReactElement {
  return (
    <StyledCard>
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
      <Typography variant="body2" marginTop={'16px'}>
        {props.body}
      </Typography>
    </StyledCard>
  );
}

export default ZarfCard;