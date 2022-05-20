import styled from 'styled-components';
import * as CssType from '../../utils/cssVariable';

export const LoadingStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 9;

  ${CssType.flexBox('row', 'center', 'center')};

  background-color: #ffffff;

  & img {
    transform: scale(0.8);
    animation: loading 1s linear 0.1s infinite alternate;
  }

  @keyframes loading {
    0% {
      transform: scale(0.6);
    }
    100% {
      transform: scale(1);
    }
  }
`;
