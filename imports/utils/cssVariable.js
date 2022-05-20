import { css } from 'styled-components';

export const flexBox = (direction, justifyContent, alignItem) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItem};
`;
