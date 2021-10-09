import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { PaletteMode } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { ColorModeContext } from './context/ColorModeContext';

import Layout from './components/layout';
import Home from './components/pages/Home';
import CardDetails from './components/pages/CardDetails';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>(
    prefersDarkMode ? 'dark' : 'light'
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* TODO: do we need a second provider? is there are better way to give styled-components acces to the theme?? */}
        <SCThemeProvider theme={theme}>
          <Layout>
            <Router>
              <Switch>
                <Route path="/cards/:id">
                  <CardDetails />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Router>
          </Layout>
        </SCThemeProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
