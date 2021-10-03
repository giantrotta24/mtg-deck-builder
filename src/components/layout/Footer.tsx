import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const Copyright = (): JSX.Element => {
  return (
    <Typography variant="body2">
      {'Copyright © '}
      <Link color="inherit" href="https://giantrotta.dev">
        Gian Trotta
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const Footer = (): JSX.Element => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: theme => theme.palette.grey[200],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">MTG Deck Builder</Typography>
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
