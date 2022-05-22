import styled from 'styled-components';
import * as CssType from '../../utils/cssVariable';

export const ButtonWrap = styled.div`
  button {
    background-color: ${(props) =>
      props.color
        ? `rgb(${props.color[0]},${props.color[1]},${props.color[2]})`
        : `${CssType.MainColor}`};
    color: ${(props) => (props.textColor ? props.textColor : '#000000')};
    transition: all 0.2s linear;
    border: 1px solid #000000;
    outline: none;
  }

  button:hover {
    background-color: ${(props) =>
      props.color
        ? `rgba(${props.color[0]},${props.color[1]},${props.color[2]},0.8)`
        : 'rgba(243,227,13,0.8)'};
    color: #ffffff;
    border: 1px solid #000000;
    outline: none;
  }
  button:focus {
    background-color: ${(props) =>
      props.color
        ? `rgb(${props.color[0]},${props.color[1]},${props.color[2]})`
        : `${CssType.MainColor}`};
    color: #ffffff;
    transition: all 0.2s linear;
    border: 1px solid #000000;
    outline: none;
  }
  button:active {
    background-color: ${(props) =>
      props.color
        ? `rgb(${props.color[0]},${props.color[1]},${props.color[2]})`
        : `${CssType.MainColor}`};
    color: ${(props) => (props.textColor ? props.textColor : '#000000')};
    transition: all 0.2s linear;
    border: 1px solid #000000;
    outline: none;
  }
`;
