import styled from 'styled-components';
import * as CssType from '../../utils/cssVariable';

export const LoadingStyle = styled.div`
  width: 100vw;
  height: 100vh;

  z-index: 9;

  ${CssType.flexBox('row', 'center', 'center')};

  background-color: #ffffff;

  & img {
    transform: scale(0.6);
    animation: loading 1s linear 0.1s infinite alternate;
  }

  @keyframes loading {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(0.7);
    }
  }
`;
