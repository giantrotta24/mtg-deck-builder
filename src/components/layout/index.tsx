import React from 'react';
import styled from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ColorModeSwitch from '../ColorModeSwitch';
import Footer from './Footer';

const LayoutContainer = styled(Container)`` as any;

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
      <LayoutContainer sx={{ mt: 4, mb: 2 }} component="main" maxWidth="md">
        <ColorModeSwitch />
        {children}
      </LayoutContainer>
      {/* Footer here */}
      <Footer />
    </Box>
  );
};

export default Layout;
