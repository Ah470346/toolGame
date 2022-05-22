import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import { GlobalStyles } from '../themes/GlobalStyles';
import Home from '../pages/Home';
import { useTheme } from '../hooks/useTheme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/style.scss';

function App() {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

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
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    setSelectedTheme={setSelectedTheme}
                    selectedTheme={selectedTheme}
                  />
                }
              ></Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
