import React from 'react';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import CardSearch from './CardSearch';

const Home = (): JSX.Element => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div>
      <Typography variant={isMobile ? 'h4' : 'h2'} component="h1" gutterBottom>
        Welcome Planeswalker
      </Typography>
      <CardSearch />
    </div>
  );
};

export default Home;
