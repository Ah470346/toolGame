import React, { useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { LoadingStyle } from './Loading.style';

const Loading = document.querySelector('#loading');

function LoadingPortal({ children }) {
  return ReactDOM.createPortal(children, Loading);
}

function LoadingPage({ active }) {
  useEffect(() => {
    const wrapLogin = document.querySelector('.load');
    wrapLogin.style.height = `${document.body.offsetHeight}px`;
  }, []);
  return (
    <LoadingPortal>
      <LoadingStyle
        className="load"
        style={{ display: `${active ? 'flex' : 'none'}` }}
      >
        <img
          src="http://st666.ez88888.com/static/images/logo.png"
          alt="error"
        />
      </LoadingStyle>
    </LoadingPortal>
  );
}

export default LoadingPage;
