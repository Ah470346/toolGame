import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import { GlobalStyles } from '../themes/GlobalStyles';
import { useTheme } from '../hooks/useTheme';
import Header from '../components/header/Header';
import LoadingPage from '../components/loadingPage/LoadingPage';

const Container = styled.div`
  margin: 5px auto 5px auto;
`;

function App() {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [loading, setLoading] = useState(true);

  // set loading time
  setTimeout(() => {
    setLoading(false);
  }, 3000);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <Header setSelectedTheme={setSelectedTheme}></Header>
          <GlobalStyles />
          {loading && <LoadingPage />}
          <Container style={{ fontFamily: selectedTheme.font }}>
            <h1>Theme Builder</h1>
            <p>
              This is a theming system with a Theme Switcher and Theme Builder.
              Do you want to see the source code?{' '}
              <a href="https://github.com/atapas/theme-builder" target="_blank">
                Click here.
              </a>
            </p>
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
