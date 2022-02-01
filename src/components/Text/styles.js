import styled, { css } from 'styled-components';

export const Tittle = styled.p`
  ${({ as }) => css`
  
    ${as === 'h1' && css`
      font-size: 42px;
      color: black;
    `}
  `}
`;
