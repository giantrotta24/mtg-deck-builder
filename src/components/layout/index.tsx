import React from 'react';
import styled from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Footer from './Footer';

const LayoutContainer = styled(Container)`
  /* color: blue; */
` as any;

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      {/* Nav here */}
      <LayoutContainer sx={{ mt: 8, mb: 2 }} component="main" maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome Planeswalker
        </Typography>
        {children}
      </LayoutContainer>
      {/* Footer here */}
      <Footer />
    </Box>
  );
};

export default Layout;
