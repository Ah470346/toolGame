import styled from 'styled-components';
import * as CssType from '../../../utils/cssVariable';

export const HeaderStyle = styled.header`
  width: 100vw;
  height: 135px;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const NavigationStyle = styled.div`
  width: 100%;
  height: 80px;

  padding-right: 10px;

  ${CssType.flexBox('row', 'space-between', 'center')};
  background-color: ${({ theme }) => theme.colors.header};
`;

export const LogoStyle = styled.div`
  img {
    height: 72px;
    width: 86.4px;
  }
`;

export const AccessStyle = styled.div`
  ${CssType.flexBox('row', 'space-start', 'center')};
  button {
    margin-left: 10px;
  }
`;

export const MenuStyle = styled.div`
  height: 45px;
  width: 100%;

  background-color: rgba(71, 76, 83, 0.8);
  backdrop-filter: blur(10px);

  padding-right: 50px;
  padding-left: 50px;
  ${CssType.flexBox('row', 'flex-start', 'center')};
`;

export const ListMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  ${CssType.flexBox('row', 'center', 'center')};
`;

export const ListItem = styled.li`
  margin: 0;
  padding: 0;

  cursor: pointer;

  transition: all 0.2s linear;
  ${CssType.flexBox('row', 'flex-start', 'center')};

  color: ${CssType.MainColor};
  font-size: 1.1em;

  svg {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }

  &:hover {
    transform: scale(1.1);
    color: ${CssType.HoverText};
  }

  &:last-child {
    margin-left: 50px;
  }
`;
