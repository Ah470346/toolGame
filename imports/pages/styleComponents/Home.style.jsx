import styled from 'styled-components';
import * as CssType from '../../utils/cssVariable';

export const Container = styled.div`
  margin: 5px auto 5px auto;
  padding: 20px;
`;

export const TitleStyle = styled.div`
  position: relative;
  display: inline-block;

  padding: 5px 10px;
  cursor: pointer;

  h1 {
    margin: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 13px;
    width: 20%;
    height: 2px;
    transition: width 0.3s linear;

    background-color: ${(props) => props.theme.colors.text};
  }

  &:hover {
    & h1 {
      color: ${CssType.HoverText};
    }
    &::after {
      width: calc(100% - 23px);
      background-color: ${CssType.HoverText};
    }
  }
`;
