import { css } from 'styled-components';

export const flexBox = (direction, justifyContent, alignItem) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItem};
`;

export const MainColor = 'rgb(243,227,13)';
export const HoverText = '#10a4e9';
