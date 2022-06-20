import { Box, styled, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import NavLink from '../interfaces/NavLink';
import ButtonLink from './ButtonLink';

export interface ExampleCardProps {
  title: string;
  body: string;
  image: string;
  navLink?: NavLink;
  reverse?: boolean;
}

const ExampleCardWrapper = styled(Box)`
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 80px;
` as typeof Box;

function ExampleCard(props: ExampleCardProps): ReactElement {
  const direction = props.reverse ? 'row-reverse' : 'row';
  return (
    <ExampleCardWrapper
      component="section"
      sx={{
        flexDirection: { xs: 'column-reverse', md: direction },
        mx: { xs: '5%', sm: '10%', md: '15%' },
      }}
    >
      <Box
        sx={{
          maxWidth: '500px',
          minWidth: '328px',
        }}
      >
        <Typography variant="h3">{props.title}</Typography>
        <Typography
          color={'text.secondary'}
          fontFamily="Roboto"
          sx={{
            typography: { xs: 'body1', md: 'h6' },
            pt: '24px',
          }}
        >
          {props.body}
        </Typography>
        {props.navLink && <ButtonLink {...props.navLink} color="secondary" />}
      </Box>
      <Box
        component="img"
        src={props.image}
        width="360px"
        height="360px"
        loading="lazy"
      />
    </ExampleCardWrapper>
  );
}

export default ExampleCard;
