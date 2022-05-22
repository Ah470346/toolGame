import React, { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import { Container, TitleStyle } from './styleComponents/Home.style';
import LoadingPage from '../components/loadingPage/LoadingPage';

function Home({ setSelectedTheme, selectedTheme }) {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <>
      <LoadingPage active={loading} />
      {!loading && (
        <React.Fragment>
          <Header setSelectedTheme={setSelectedTheme}></Header>
          <Container style={{ fontFamily: selectedTheme.font }}>
            <TitleStyle>
              <h1>Thanh Toán</h1>
            </TitleStyle>
          </Container>
        </React.Fragment>
      )}
    </>
  );
}

export default Home;
