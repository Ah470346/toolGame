import styled from 'styled-components';
import * as CssType from '../../../utils/cssVariable';

export const HeaderStyle = styled.header`
  width: 100vw;
  height: 100px;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const AccessStyle = styled.div`
  width: 100%;
  height: 70px;

  ${CssType.flexBox('row', 'space-start', 'center')};
  background-color: ${({ theme }) => theme.colors.header};
`;
