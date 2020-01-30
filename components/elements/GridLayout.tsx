import styled from 'styled-components';

interface iGrid {
  columns: number;
  background?: string;
  gap?: string;
}

export const Grid = styled.div<iGrid>`
  display: grid;
  grid-auto-columns: repeat(${props => props.columns}, 1fr);
  grid-gap: ${props => props.gap};
  background: ${props => props.background};
`;

interface iGridItem {
  maxWidth?: string;
}
export const GridItem = styled.div<iGridItem>`
  max-width: ${props => props.maxWidth};
`;